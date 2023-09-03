import React from 'react';
import { View, TextInput, SafeAreaView, StyleSheet} from 'react-native'

const Custominput = ({value, setValue, placeholder, secureTextEntry, inputType}) => {
  const keyboardType = inputType === 'numero' ? 'numeric' : 'default';

  return (
    <SafeAreaView style={styles.margin}>
      
      <View>
        <TextInput
          style={styles.textinput}
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  margin: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  textinput:{
    marginLeft: 10, 
    padding: 5, 
    width: 200,
    borderRadius: 5, 
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1, 
    paddingHorizontal: 10,
    marginVertical: 5

  }
})

export default Custominput