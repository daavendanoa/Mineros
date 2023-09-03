import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, Image, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import Logo from '../../assets/images/Research.png';
import CustomButton from '../components/CustomButton/CustomButton';
import DateInput from '../components/DatePicker/DatePicker'


const SearchScreen = () => {
  const navigation = useNavigation();

  const {height} = useWindowDimensions();

  const onPressedSearch = () => {
    //navigation.navigate('Reporte');}
    alert('En construcción')
  };
  const onPressedBack = () => {
    navigation.goBack()
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.margin}>

        <Image
          source={Logo}
          style={[styles.logo, {height: height*0.3}]}
        />
        <Text style={styles.tittle}>Seleccione Rango de Consulta</Text>

        <View style={styles.views}>
          <Text style={styles.text}>Fecha Inicial</Text>
          <Text style={styles.text}>Fecha Final</Text>
        </View>
          <View style={styles.views}>
          <DateInput/>            
          <DateInput/>
          </View>
          <View style={styles.views}>
          <CustomButton 
            text={'Consultar'} 
            onPress={onPressedSearch}
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
    justifyContent: 'center', 
    alignItems: 'center'
  },
  tittle: {
    fontWeight: 'bold', 
    color: 'black', 
    fontSize: 20,
    marginVertical: 20
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
    alignItems: 'center', 
    paddingHorizontal: 50,
  },
});

export default SearchScreen;
