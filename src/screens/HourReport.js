import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {Image, View, Text, SafeAreaView, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment-timezone';
import Logo from '../../assets/images/Report.png';
import Custominput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';
import DateInput from '../components/DatePicker/DatePicker'

const ReportScreen = () => {
  //Aquí van los hooks
  const navigation = useNavigation();  
  const [document, setDocument] = useState('');

  ////////////////////////
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment().tz('America/Bogota');
      const formattedTime = now.format('hh:mm A');
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  ////////////////////////
  const [selectedOption, setSelectedOption] = useState('Entrada');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  ///////////////////////

  const {height} = useWindowDimensions();

  const onPressedBack = () => {
    navigation.goBack()
  };
  const onPressedRegister = () => {
    // navigation.navigate('Fecha');
    alert('En construcción');
  };  

  return (
    <ScrollView>
      <SafeAreaView style={styles.margin}>
        <Text style={styles.tittle}>Reporte de Horas</Text>
        <Image
            source={Logo}
            style={[styles.logo, {height: height*0.3}]}
        />
        <Text style={styles.text}>Seleccione la Fecha del Reporte</Text>
        <DateInput
        />
        <Text style={styles.text}>Hora del Reporte Actual</Text>
        <View style={styles.hora}>
          <TextInput style={styles.text}
            value={currentTime}
            editable={false}
          />
        </View>
        <Text style={styles.text}>Ingrese el Numero de Documento</Text>
        <Custominput 
            placeholder='Documento'
            value={document}
            setValue={setDocument}
              inputType="numero"
        />

        <Text style={styles.text}>Seleccione el Tipo de Reporte</Text>
        <View style={styles.container}>
          <Picker
            selectedValue={selectedOption}
            onValueChange={(itemValue) => handleOptionChange(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Entrada" value="Entrada" />
            <Picker.Item label="Salida" value="Salida" />
          </Picker>
          {/* <Text>Opción seleccionada: {selectedOption}</Text> */}
        </View>


        <View style={styles.views}>
          <CustomButton 
            text={'Reportar'} 
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
    resizeMode: 'contain',
    marginVertical: 5
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
    fontWeight: 'bold',

  },
  hora: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10, 
    width: 200,
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    marginVertical: 5
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

export default ReportScreen;
