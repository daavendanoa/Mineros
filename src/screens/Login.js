import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text, Image, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/login.png';
import Custominput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const onPressedLogin = () => {
    if (username === '123' && password === '123') {
      setUsername('')
      setPassword('')
      navigation.navigate('menu');

    } else {
      alert('Credenciales incorrectas. Ingrese 123 para esta prueba.');
    }
  };
  const onPressedForgotP = () => {
    alert('En construcción');
  };
  const onPressedRegister = () => {
    navigation.navigate('Registrarse');
  };  

  return (
    <ScrollView>
      <SafeAreaView style={styles.margin}>
        <Text style={styles.tittle}>Asociación Minera</Text>
        <Image
          source={Logo}
          style={[styles.logo, {height: height*0.3}]}
        />
        <Text style={styles.text}>Ingrese Numero de Documento:</Text>
        <Custominput 
          placeholder='Documento'
          value={username}
          setValue={setUsername}
          inputType="numero"
        />
        <Text style={styles.text}>Ingrese contraseña:</Text>
        <Custominput 
        placeholder='Contraseña'
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        inputType="texto"
        />

        <CustomButton 
          text={'Ingresar'} 
          onPress={onPressedLogin}
          type="primary"/>
        
        <CustomButton 
          text={'¿Olvidó su Contraseña?'} 
          onPress={onPressedForgotP}
          type="secundary"/>

        <View style={styles.views}>
          <Text 
            style={{ 
              fontSize: 16,
              marginTop: 10, 
              fontWeight: 'bold',
              textAlign: 'right',}}>No tienes cuenta? </Text>

          <CustomButton 
            text={'Registrarse'}
            onPress={onPressedRegister}
            type="terciary"/>
        </View>
      </SafeAreaView>
    </ScrollView>    
  );
};

const styles = StyleSheet.create({
  margin: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tittle: {
    fontWeight: 'bold', 
    color: 'black', 
    fontSize: 30
  },
  logo:{
    maxWidth: 300, 
    maxHeight: 200, 
    resizeMode: 'contain'
  },
  views:{
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text:{
    fontWeight: 'bold',

  }

});

export default LoginScreen;
