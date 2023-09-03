
import React, { useState } from 'react';
import {View, Modal} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './src/screens/Menu';
import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import ReportScreen from './src/screens/HourReport';
import SearchScreen from './src/screens/Search';
import NewsScreen from './src/screens/News';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="menu" component={MenuScreen} />   
        <Stack.Screen name="Registrarse" component={RegisterScreen} />
        <Stack.Screen name="Reporte" component={ReportScreen} />   
        <Stack.Screen name="Busqueda" component={SearchScreen} />           
        <Stack.Screen name="Novedad" component={NewsScreen} />   
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
