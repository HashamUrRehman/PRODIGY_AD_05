// WelcomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/scan-logo.jpg')} 
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to the QR Scanner!</Text>
      <Text style={styles.subtitle}>Scan QR codes easily and quickly.</Text>

      {/* Custom Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
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
logo: {
  width: 160,
  height: 200,
  marginBottom: 40,
  resizeMode: 'contain',
  borderRadius: 80, 
  borderColor: '#1ABC9C', 
  borderWidth: 5,
  shadowColor: '#000',
  shadowOffset: { width: 1, height: 6 },
  shadowOpacity: 0.3,
  shadowRadius: 5,
},
title: {
  fontSize: 34,
  fontWeight: 'bold',
  color: '#2C3E50',
  marginBottom: 20,
},
subtitle: {
  fontSize: 18,
  color: '#6C757D', 
  marginBottom: 30,
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

export default WelcomeScreen;
