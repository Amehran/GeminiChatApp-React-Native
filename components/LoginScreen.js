import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign In and Sign Up
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignIn = () => {
    // Add your authentication logic here
    navigation.navigate('Chat'); // Navigate to ChatScreen after sign-in
  };

  const handleSignUp = () => {
    // Add your sign-up logic here
    if (newPassword === confirmPassword) {
      // User signed up logic
      setIsSignUp(false); // Return to Sign In screen after successful sign-up
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
      {isSignUp ? (
        // Sign Up UI
        <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="New Password"
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <Button title="Submit" onPress={handleSignUp} />
          <Button title="Back to Sign In" onPress={() => setIsSignUp(false)} />
        </>
      ) : (
        // Sign In UI
        <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Sign In" onPress={handleSignIn} />
          <Button title="Sign Up" onPress={() => setIsSignUp(true)} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space between the buttons
    marginTop: 10,

  },
});

export default LoginScreen;