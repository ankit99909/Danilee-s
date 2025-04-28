import React, { useEffect } from 'react';
import { View, Image, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('Login'), 2000);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.container}
      blurRadius={6} // This will blur the background image
    >
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo} 
        resizeMode="contain" // This will scale the logo properly
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.8, 
    height: height * 0.25,
  },
});

export default SplashScreen;
