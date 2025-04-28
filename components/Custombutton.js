import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Custombutton = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.loginButton, style]} onPress={onPress}>
      <Text style={[styles.loginButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Custombutton;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#A8C539', 
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
