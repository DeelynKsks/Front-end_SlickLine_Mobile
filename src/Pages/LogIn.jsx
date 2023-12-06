import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonTouchable from '../Components/ButtonTouchable';
import { styles } from './../Styles/Styles';

function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (correo, pass) => {
        const url = 'http://192.168.1.7:3000/auth/signin';
      
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: correo,
              password: pass,
            }),
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log('Login successful:', data);
      
        } catch (error) {
          console.error('Error during login:', error.message);
          console.error('Server response:');
        }
      };
      
      

  return (
    <View style={styles.container}>
      <Text style={styles2.label}>Correo Electrónico</Text>
      <TextInput
        style={styles2.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles2.label}>Contraseña</Text>
      <TextInput
        style={styles2.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <ButtonTouchable
        pressFunction={() => handleLogin(email, password)}
        styleText={styles.buttonTextBlack}
        styleButton={styles.buttonTextBlack}
        text={'Iniciar sesión'}
      />

    </View>
  )
}

const styles2 = StyleSheet.create({
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
    },
  });

export default LogIn