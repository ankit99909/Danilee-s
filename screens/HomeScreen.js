import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import CustomButton from '../components/Custombutton';
import Header from '../components/Header';
import CustomLoader from '../components/CustomLoader';
import { useFocusEffect } from '@react-navigation/native';


const HomeScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Recurring');
  const [loading, setLoading] = useState(true);

  const handleTabPress = (tab) => setSelectedTab(tab);
  const handleLocationPress = () => console.log('Location pressed');
  const handleServicePress = () => console.log('Service pressed');
  const handleDatePress = () => console.log('Date pressed');
  const handleNextPress = () => console.log('Next pressed');
  const handleSeePlansPress = () => console.log('See All Plans pressed');

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
        title="Schedule"
        onBellPress={() => navigation.replace('NotificationScreen')}
        showBack={false}
      />
      <View style={styles.container}>
        <StatusBar backgroundColor="#A8C539" barStyle="dark-content" />
        <Text style={styles.title}>Schedule a Service</Text>
        <View style={styles.tabContainer}>
          {['Adhoc', 'Recurring'].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => handleTabPress(tab)}
              style={[
                styles.tabButton,
                selectedTab === tab ? styles.activeTabButton : styles.inactiveTabButton,
              ]}
              activeOpacity={0.8}
            >
              <Text style={[
                styles.tabButtonText,
                selectedTab === tab ? styles.activeTabButtonText : styles.inactiveTabButtonText,
              ]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <CustomButton
          title="DaniLee’s Pelham, NY"
          onPress={handleLocationPress}
          style={styles.selectButton}
          textStyle={styles.selectButtonText}
        />
        <CustomButton
          title="Select Service"
          onPress={handleServicePress}
          style={styles.selectButton}
          textStyle={styles.selectButtonText}
        />
        <CustomButton
          title="Select Date"
          onPress={handleDatePress}
          style={styles.selectButton}
          textStyle={styles.selectButtonText}
        />
        {selectedTab === "Adhoc" && (
          <CustomButton
            title="Select Time"
            onPress={handleDatePress}
            style={styles.selectButton}
            textStyle={styles.selectButtonText}
          />
        )}

        <CustomButton
          title="Next"
          onPress={handleNextPress}
          style={styles.primaryButton}
          textStyle={styles.primaryButtonText}
        />
        <CustomButton
          title="See All Plans"
          onPress={handleSeePlansPress}
          style={styles.secondaryButton}
        />
      </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    height: 40,
  },

  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inactiveTabButton: {
    backgroundColor: '#f0f0f0',
  },

  activeTabButton: {
    backgroundColor: '#A8C539',
  },

  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  inactiveTabButtonText: {
    color: '#555',
  },

  activeTabButtonText: {
    color: '#fff',
  },
  selectButton: {
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  selectButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  primaryButton: {
    backgroundColor: '#A8C539',
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#A8C539',
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    color: '#A8C539',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
