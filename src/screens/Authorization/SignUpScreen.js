import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (input) => setFocusedInput(input);
  const handleBlur = () => setFocusedInput(null);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert('Please fill in all the fields');
      return;
    }

    try {
      const response = await fetch('https://xljhj9lk-3000.inc1.devtunnels.ms/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      const rawResponse = await response.text();
      console.log('Raw response:', rawResponse);

      let data;
      try {
        data = JSON.parse(rawResponse);
      } catch (err) {
        console.error('Failed to parse JSON:', err);
        Alert.alert('Invalid server response. Please try again.');
        return;
      }

      if (response.ok) {
        console.log('Sign up successful:', data);
        Alert.alert('Sign up successful! You can now log in.');
        navigation.replace('LoginScreen');
      } else {
        console.log('Sign up failed:', data);
        Alert.alert(data?.message || 'Sign up failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      Alert.alert('An error occurred. Please check your connection or try again later.');
    }
  };


  const renderInput = (label, value, setValue, inputKey, secureTextEntry = false) => (
    <View style={[styles.card, focusedInput === inputKey || value ? styles.focusedCard : {}]}>
      <Text style={[styles.label, focusedInput === inputKey || value ? styles.activeLabel : {}]}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        onFocus={() => handleFocus(inputKey)}
        onBlur={handleBlur}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Sign up</Text>

      {renderInput('Name', name, setName, 'name')}
      {renderInput('Email', email, setEmail, 'email')}
      {renderInput('Password', password, setPassword, 'password', true)}

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.alreadyHaveAccount}>
          Already have an account?
          <Text style={styles.loginLink}> →</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={()=>handleSignUp()}>
        <Text style={styles.signUpButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <View style={styles.down}>
        <Text style={styles.orText}>Or login with social account</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-facebook" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  backButton: {
    marginBottom: 0,
    fontWeight: 'bold',
    fontSize: 40,
  },
  backButtonText: {
    fontSize: 24,
    color: '#333',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'left',
  },
  card: {
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  focusedCard: {
    borderColor: '#DB3022',
    elevation: 5,
  },
  label: {
    position: 'absolute',
    top: 20,
    left: 15,
    fontSize: 14,
    color: '#aaa',
  },
  activeLabel: {
    top: 5,
    fontSize: 12,
    color: '#DB3022',
  },
  input: {
    height: 40,
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 0,
  },
  alreadyHaveAccount: {
    textAlign: 'right',
    marginVertical: 10,
    color: '#6D6D6D',
  },
  loginLink: {
    color: '#DB3022',
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
    borderBottomColor:'#DB3022',
  },
  signUpButton: {
    backgroundColor: '#DB3022',
    paddingVertical: 10,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  down: {
    marginTop: 40,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#6D6D6D',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default SignUpScreen;
