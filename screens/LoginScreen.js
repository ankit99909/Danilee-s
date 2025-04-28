import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Custombutton from '../components/Custombutton';
import Header from '../components/Header';

const LoginScreen = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
    if (!emailError && !passwordError && emailRegex.test(email) && password.length >= 6) {
      login();
    }
  };
  const handleCreateAccount = () => {
    console.log('Create Account pressed');
  };

  return (
    <>
      <Header title="Login" showBack={false} showBell={false} />
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="#A8C539" barStyle={"dark-content"} />
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={[styles.input, emailError ? styles.inputError : null]}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#AAA"
          />
          {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={[styles.input, passwordError ? styles.inputError : null]}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#AAA"
          />
          {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

          <View style={styles.forgotPasswordContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>

            <Custombutton title="Login" onPress={handleLogin} style={styles.selectButton} />
            <Custombutton title="Create Account" onPress={handleCreateAccount} style={styles.CreateAccountButton} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 40,
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
  },
  inputContainer: {
    width: '85%',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1.5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    fontWeight: '500',
  },
  forgotPasswordContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  forgotText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
  },
  selectButton: {
    marginTop: 20,
    width: '70%',
  },
  CreateAccountButton: {
    width: '80%',
    marginTop: 20,
  },
});

export default LoginScreen;
