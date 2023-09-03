import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateInput = () => {
  const [fecha, setFecha] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (selectedDate) => {
    if (selectedDate) {
      setFecha(selectedDate);
    }
    hideDatePicker();
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={showDatePicker} >
        <Text>{fecha.toLocaleDateString('es')}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        locale="es_ES"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10, 
    padding: 5, 
    width: 200,
    borderRadius: 5, 
    backgroundColor: 'white',
    borderColor: '#e8e8e8',
    borderWidth: 1, 
    paddingHorizontal: 10,
    marginVertical: 5
  },
});

export default DateInput;
