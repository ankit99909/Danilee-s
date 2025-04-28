import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Header = ({
  title,
  firstText,
  onBackPress,
  onBellPress,
  onTextPress,
  showText =true,
  showBack = true,
  showBell = true
}) => (
  <View style={styles.container}>
    {showBack && (
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <MaterialIcons name="arrow-back-ios" size={24} color="#fff" />
      </TouchableOpacity>
    )}
     {showText && (
      <TouchableOpacity onPress={onTextPress} style={styles.backButton}>
        <Text style={styles.firstText}>{firstText}</Text>
      </TouchableOpacity>
    )}
    <Text style={styles.title}>{title}</Text>
    {showBell && (
      <TouchableOpacity onPress={onBellPress} style={styles.bellButton}>
        <FontAwesome name="bell" size={24} color="#fff" />
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#A8C539',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  firstText:{
    fontSize: 18,
    fontWeight:"600",
    color: '#fff',

  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 18,
  },
  bellButton: {
    position: 'absolute',
    right: 20,
    top: 18,
  },
});

export default Header;
