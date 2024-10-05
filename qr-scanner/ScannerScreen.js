// ScannerScreen.js

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const ScannerScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setData(data);
  };

  const openLink = () => {
    if (data && data.startsWith('http')) {
      Linking.openURL(data).catch(err => console.error('Failed to open link:', err));
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Scanned Data: {data}</Text>
          {data && data.startsWith('http') && (
            <Button title="Open Link" onPress={openLink} />
          )}
          <Button title="Scan Again" onPress={() => setScanned(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F0F0F3', // Light neutral gray for a subtle background
},
resultContainer: {
  position: 'absolute',
  bottom: 20,
  backgroundColor: '#fff',
  paddingVertical: 20,
  paddingHorizontal: 40,
  borderRadius: 12,
  borderColor: '#28A745', // Green border for accent
  borderWidth: 2, // Clean border effect
  shadowColor: '#000', // Subtle shadow for card effect
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.2,
  shadowRadius: 5,
  elevation: 5, // Android shadow for floating effect
},
resultText: {
  fontSize: 20, // Slightly larger text
  color: '#2C3E50', // Dark text for better contrast
  fontWeight: '600', // Semi-bold for emphasis
},

});

export default ScannerScreen;
