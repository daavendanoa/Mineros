import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Text, Image, SafeAreaView, ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Logo from '../../assets/images/News.png';
import CustomButton from '../components/CustomButton/CustomButton';
import DateInput from '../components/DatePicker/DatePicker'
import Custominput from '../components/CustomInput/CustomInput';



const SearchScreen = () => {
  const navigation = useNavigation();
  const [dias, setDias] = useState('');
  const {height} = useWindowDimensions();
  ////////////////////////
  const [selectedOption, setSelectedOption] = useState('Vacaciones');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  ///////////////////////
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


          <Text style={styles.text}>Días de Ausencia</Text>
          <Custominput 
            placeholder='# días'
            value={dias}
            setValue={setDias}
            inputType="numero"
          />

          <Text style={styles.text}>Seleccione el Tipo de Nodevad</Text>
          <View style={styles.container}>
            <Picker
              selectedValue={selectedOption}
              onValueChange={(itemValue) => handleOptionChange(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Incapacidades" value="Incapacidades"/>
              <Picker.Item label="Licencias" value="Licencias"/>
              <Picker.Item label="Vacaciones" value="Vacaciones"/>
            </Picker>
            {/* <Text>Opción seleccionada: {selectedOption}</Text> */}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginLeft: 10, 
    borderRadius: 5,
    
  },
  picker: {
    width: 200,
    height: 50,
  },  
});

export default SearchScreen;
