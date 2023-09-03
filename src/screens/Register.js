import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {ScrollView, Image, View, Text, SafeAreaView, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/images/register.png';

import Custominput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

const RegisterScreen = () => {
  //Aquí van los hooks
  const navigation = useNavigation();
  const [document, setDocument] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');
  const [passwordconfirm, setPasswordconfirm] = useState('');

  const {height} = useWindowDimensions();

  const onPressedBack = () => {
    navigation.goBack()
  };
  const onPressedRegister = () => {
    if (!email.includes('@') || !email.includes('.')) {
      alert('El correo electrónico debe contener un "@" y un punto (".")');
      return;
    }
    if (password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return;
    }    
    if (password !== passwordconfirm) {
      alert('Las contraseñas no coinciden');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      alert('La contraseña debe contener al menos una letra mayúscula');
      return;
    }
    if (!/[0-9]/.test(password)) {
      alert('La contraseña debe contener al menos un número');
      return;
    }
    if (!/[@#$%*^&+=]/.test(password)) {
      alert('La contraseña debe contener al menos un carácter especial (por ejemplo, @, #, $, %, ^, &, +, =)');
      return;
    }
    alert('Registro exitoso');
  };
  return (
      <ScrollView>
        <SafeAreaView style={styles.margin}>
          <Text style={styles.tittle}>Registro de Usuario</Text>
          <Image
              source={Logo}
              style={[styles.logo, {height: height*0.3}]}
          />
          <Custominput 
            placeholder='Numero de documento'
            value={document}
            setValue={setDocument}
              inputType="numero"
          />
          <Custominput 
            placeholder='Nombre del empleado'
            value={nombre}
            setValue={setNombre}
            inputType="texto"
          />

          <Custominput 
            placeholder='Correo electrónico'
            value={email}
            setValue={setEmail}
            inputType="correo"
          />

          <Custominput 
            placeholder='Crear Contraseña'
            value={password}
            setValue={setPassword}
            secureTextEntry={true}
            inputType="texto"
          />

          <Custominput 
            placeholder='Confirmar Contraseña'
            value={passwordconfirm}
            setValue={setPasswordconfirm}
            secureTextEntry={true}
            inputType="texto"
          />

          <View style={styles.views}>
            <CustomButton 
              text={'Registrarse'} 
              onPress={onPressedRegister}
              type="primary"
              />

            <CustomButton 
              text={'Volver'} 
              onPress={onPressedBack}
              type="primary"/>     
          </View>

        </SafeAreaView>
      </ScrollView>  
  );
};

const styles = StyleSheet.create({
  margin: {
    alignItems: 'center'
  },
  logo:{
    maxWidth: 500, 
    maxHeight: 400, 
    resizeMode: 'contain'
  },  
  tittle: {
    fontWeight: 'bold', 
    color: 'black', 
    fontSize: 30
  },
  views:{
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text:{
    fontWeight: 'bold'
  },

});

export default RegisterScreen;