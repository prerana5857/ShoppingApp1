import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleFocus = (input) => setFocusedInput(input);
  const handleBlur = () => setFocusedInput(null);
  const handleLogin = async () => {
    try {
      const response = await fetch('https://xljhj9lk-3000.inc1.devtunnels.ms/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('token', data.token);
        navigation.replace('MainApp');
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };


  const renderInput = (label, value, setValue, inputKey, secureTextEntry = false) => (
    <View style={[styles.card, focusedInput === inputKey || value ? styles.focusedCard : {}]}>
      <Text style={[styles.label, focusedInput === inputKey || value ? styles.activeLabel : {}]}>
        {label}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          onFocus={() => handleFocus(inputKey)}
          onBlur={handleBlur}
          secureTextEntry={secureTextEntry}
          keyboardType={inputKey === 'email' ? 'email-address' : 'default'}
        />
        <View style={styles.password}>
          {inputKey === 'password' && (
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setPasswordVisible(!isPasswordVisible)}
            >
              <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} size={24} color="#6D6D6D" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Login</Text>

      {renderInput('Email', email, setEmail, 'email')}
      {renderInput('Password', password, setPassword, 'password', !isPasswordVisible)}

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
        <Text style={styles.forgotPassword}>Forgot your password? <Text style={styles.link}>→</Text></Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={()=>handleLogin()}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <View style={styles.down}>
        <Text style={styles.orText}>Or login with social account</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-google" size={24} color="black"/>
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
    padding: 25,
    backgroundColor: '#F9F9F9',
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
    paddingHorizontal: 15,
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
  password:{
  },
  eyeButton: {
    paddingHorizontal: 5,
    justifyContent: 'right',
    left: 250,
    bottom: 15,
  },
  label: {
    position: 'absolute',
    top: 24,
    left: 15,
    fontSize: 16,
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
    marginBottom: 0,
    marginTop: 10,
  },
  forgotPassword: {
    textAlign: 'right',
    marginVertical: 10,
    color: '#6D6D6D',
    fontSize: 14,
  },
  link: {
    color: '#DB3022',
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#DB3022',

    paddingVertical: 10,
    borderRadius: 35,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  down: {
    marginTop: 100,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#6D6D6D',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  socialIcon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
