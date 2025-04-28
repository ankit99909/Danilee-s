import React, { useState,useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Header from '../components/Header';
import CustomLoader from '../components/CustomLoader';
import { useFocusEffect } from '@react-navigation/native';

const ServicesScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('In-Progress');
  const [loading, setLoading] = useState(true);

 useFocusEffect(
    useCallback(() => {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
      return () => clearTimeout(timer);
    }, [])
  );

  if (loading) {
    return <CustomLoader visible={loading} />
  }
  

  return (
    <>
      <Header
        title="Adhoc Bookings"
        onBellPress={() => navigation.replace('NotificationScreen')}
        onTextPress={() => navigation.replace('RecurringBookingsScreen')}
        showBack={false}
        showText={true}
        firstText="Recurring"
        showBell={true}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.tabs}>
          {['In-Progress', 'Completed'].map(tab => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab && styles.activeTab
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.content}>
          <Text style={styles.noBookingText}>No booking found</Text>
        </View>
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.fab}>
            <FontAwesome name="filter" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.fab}>
            <Ionicons name="calendar" size={28} color="white" />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    backgroundColor: '#8DC63F',
    paddingVertical: 18,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: '#eeecee',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#A8C539',
  },
  tabText: {
    fontSize: 15,
    color: '#999',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noBookingText: {
    color: '#555',
    fontSize: 16,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fab: {
    backgroundColor: '#E91E63',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});
