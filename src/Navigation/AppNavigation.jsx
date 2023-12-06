import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Principal from './../Pages/Principal';
import LogIn from '../Pages/LogIn';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{ title: 'Principal' }}
        />
        <Stack.Screen
          name="Login"
          component={LogIn}
          options={{ title: 'Login' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

export default AppNavigation