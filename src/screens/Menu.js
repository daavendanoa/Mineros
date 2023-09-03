import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, Image, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import Logo from '../../assets/images/menu.png';
import CustomButton from '../components/CustomButton/CustomButton';


const MenuScreen = () => {
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onPressedLogin = () => {
    navigation.navigate('Reporte');
  };
  const onPressedSearch = () => {
    navigation.navigate('Busqueda');
  };
  const onPressedNews = () => {
    navigation.navigate('Novedad');
  };  
  const onPressedclosed = () => {
    navigation.navigate('Login');
  }; 
  return (
    <ScrollView>
      <SafeAreaView style={styles.margin}>
        <CustomButton
            text={'Cerrar Sesión'} 
            onPress={onPressedclosed}
            type="five"/>
        <Image
          source={Logo}
          style={[styles.logo, {height: height*0.3}]}
        />
        <Text style={styles.tittle}>Seleccione una Acción</Text>

        <CustomButton
          text={'Ingreso de horas'} 
          onPress={onPressedLogin}
          type="four"/>
        
        <CustomButton 
          text={'Consulta de horas'} 
          onPress={onPressedSearch}
          type="four"/>

        <CustomButton 
          text={'Novedades'} 
          onPress={onPressedNews}
          type="four"/>

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
    fontSize: 20
  },
  logo:{
    maxWidth: 350, 
    maxHeight: 200, 
    marginTop: 20,
  },
  views:{
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  text:{
    fontWeight: 'bold',
  },
});

export default MenuScreen;
