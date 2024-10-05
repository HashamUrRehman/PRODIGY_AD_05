// HomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      {/* Custom Button for Scanning */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Scanner')}
      >
        <Text style={styles.buttonText}>Start Scanning</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E5E5E5', 
  padding: 20,
},
title: {
  marginBottom: 40,
  textShadowColor: '#000',
  textShadowOffset: { width: 0, height: 1 },
  textShadowRadius: 1,
  fontSize: 34,
  fontWeight: 'bold',
  color: '#2C3E50',
},
button: {
  backgroundColor: '#007BFF', 
  paddingVertical: 15,
  paddingHorizontal: 40,
  borderRadius: 10,
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
},
buttonText: {
  color: '#fff', 
  fontSize: 20,
  fontWeight: 'bold',
  textAlign: 'center',
},

});

export default HomeScreen;
