import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ServicesScreen from '../screens/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image } from 'react-native'; // 👈 Import Image
import { FontAwesome } from '@expo/vector-icons'; // 👈 Still using FontAwesome for Profile

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E91E63',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 5,
          height: 70,
        },
        tabBarItemStyle: {
          paddingTop: 12,
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Image
                source={require('../assets/images/book.png')}
                style={{
                  width: 38,
                  height: 38,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            );
          } else if (route.name === 'Booking') {
            return (
              <Image
                source={require('../assets/images/event.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: color,
                  resizeMode: 'contain',
                }}
              />
            );
          } else if (route.name === 'Profile') {
            return <FontAwesome name="user-circle" size={29} color={color} solid />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={ServicesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
