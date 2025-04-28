import React, { useState, useRef,useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Pressable } from 'react-native';

export default function CustomModal({ visible, onClose, onConfirm }) {
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      if (visible) {
        Animated.timing(opacity, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(opacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
    }, [visible]);
  
    if (!visible) return null; 
    return (
        <Animated.View style={[StyleSheet.absoluteFillObject, { opacity, zIndex: 1000 }]}>
          <View style={styles.overlay}> 
            <Pressable style={styles.backdrop} onPress={onClose} />
            <View style={styles.modalContent}>
              <Text style={styles.title}>Do you want to logout?</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity onPress={onClose} style={styles.noButton}>
                  <Text style={styles.noText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onConfirm} style={styles.yesButton}>
                  <Text style={styles.yesText}>Yes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Animated.View>
      );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#4f46e5',
    padding: 12,
    borderRadius: 8,
  },
  openButtonText: {
    color: 'white',
    fontSize: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: '80%',
    zIndex: 10,
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  noButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 10,
    backgroundColor: 'white',  // white background
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    alignItems: 'center',
  },
  
  yesButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    backgroundColor: 'white',  // white background
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    alignItems: 'center',
  },
  
  noText: {
    color: 'blue',
    fontWeight: 'bold',
  },
  
  yesText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
