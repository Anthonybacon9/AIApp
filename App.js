import React from 'react';
import { StyleSheet, View } from 'react-native';
import CameraScreen from './src/components/screens/CameraScreen';
import RegistrationScreen from './src/components/screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CameraScreen />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'center',
    paddingBottom: 50,
  },
});