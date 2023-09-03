import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type}) => {
  return (
    <Pressable onPress={onPress} style={[styles.font, styles[`font_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
    font: {
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginLeft: 20,
    },
    font_primary: {
        backgroundColor: '#BA68C8',
        width: 150,
        marginTop: 20,
    },
    font_secundary: {
        // backgroundColor: '#F9FBFC',
        width: '100%',
        marginTop: 10,
    },
    font_terciary: {
      marginTop: 10,
      alignItems: 'left',
      marginLeft: 10,
    }, 
    font_four: {
      backgroundColor: '#BA68C8',
      width: '80%',
      marginTop: 20,
    },   
    font_five: {
      backgroundColor: 'black',
      marginLeft: 250,
      borderRadius: 2,
      width: '10',
    },          
    text:{
        color: 'white', 
        fontSize: 16
    },
    text_secundary:{
        color: 'gray', 
        fontSize: 16,
        fontWeight: 'bold', 
    },
    text_terciary:{
        color: 'blue', 
        textAlign: 'left',
    },
    text_four:{
      color: 'white', 
      fontSize: 16,
      fontWeight: 'bold', 
  },
});

export default CustomButton