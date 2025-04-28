import { useState ,useContext,useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 
import CustomModal from '../components/CustomModal';
import Header from '../components/Header';
import { AuthContext } from '../context/AuthContext';
import CustomLoader from '../components/CustomLoader';
import { useFocusEffect } from '@react-navigation/native';

const MenuItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress} activeOpacity={0.7}>
    <Text style={styles.menuText}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="gray" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);




  const handleMenuPress = (item) => {
    if (item === 'Logout') {
      setModalVisible(true); 
    } else {
      console.log(`${item} pressed`);
    }
  };
  const handleLogout = () => {
    logout()
    console.log('✅ User confirmed logout!');
    setModalVisible(false);

  };

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
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {[
          'My Profile',
          'Invoices',
          'Kids',
          'About Us',
          'Terms & Conditions',
          'Logout',
          'Close Account',
        ].map((item, index) => (
          <MenuItem key={index} title={item} onPress={() => handleMenuPress(item)} />
        ))}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0 (1.03)</Text>
        </View>
      </ScrollView>

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleLogout}
      />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    paddingVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomColor: '#eeecee',
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  versionContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  versionText: {
    color: 'gray',
    fontSize: 13,
  },
});
