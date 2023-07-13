import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RegistrationScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegistration = () => {
    // Perform registration logic here
    // Send registration data to the backend API
    // Handle the response accordingly (success or error)
  };

  const handleLogin = () => {
    navigation.navigate('LoginScreen'); // Replace 'Login' with your login screen name
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Register" onPress={handleRegistration} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
