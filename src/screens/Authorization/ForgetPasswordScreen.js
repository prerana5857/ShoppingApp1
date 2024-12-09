import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotPasswordScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsValid(/\S+@\S+\.\S+/.test(text));
  };

  const handleFocus = (input) => setFocusedInput(input);
  const handleBlur = () => setFocusedInput(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="chevron-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>Forgot password</Text>

      <Text style={styles.instructions}>
        Please enter your email address. You will receive a link to create a new password via email.
      </Text>

      <View style={[styles.card, focusedInput === 'email' || email ? styles.focusedCard : {}]}>
        <Text style={[styles.label, focusedInput === 'email' || email ? styles.activeLabel : {}]}>
          Email
        </Text>
        <TextInput
          style={[styles.input, !isValid && styles.inputError]}
          value={email}
          onChangeText={handleEmailChange}
          onFocus={() => handleFocus('email')}
          onBlur={handleBlur}
          keyboardType="email-address"
        />
      </View>

      {!isValid && <Text style={styles.errorText}>Not a valid email address. Should be your@email.com</Text>}

      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>SEND</Text>
      </TouchableOpacity>
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
    fontSize: 24,
    color: '#333',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#6D6D6D',
    marginBottom: 20,
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
    borderColor: '#E63946',
    elevation: 5,
  },
  label: {
    position: 'absolute',
    top: 22,
    left: 15,
    fontSize: 16,
    color: '#aaa',
  },
  activeLabel: {
    top: 5,
    fontSize: 12,
    color: '#E63946',
  },
  input: {
    height: 40,
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 0,
  },
  inputError: {
    borderColor: '#E63946',
  },
  errorText: {
    color: '#E63946',
    fontSize: 12,
    marginTop: 5,
  },
  sendButton: {
    backgroundColor: '#E63946',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
