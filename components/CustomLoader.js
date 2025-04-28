import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Modal, Animated } from 'react-native';

const CustomLoader = ({
  visible,
  loaderColor = "#000000",
  overlayOpacity = 0.4,
}) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={[styles.overlay, { backgroundColor: `rgba(0,0,0,${overlayOpacity})` }]}>
        <Animated.View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={loaderColor} />
        </Animated.View>
      </View>
    </Modal>
  );
};

export default CustomLoader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 25,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 8,
    transform: [{ scale: 1 }],
  },
  text: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});
