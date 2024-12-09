import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const AddAddress = ({ navigation, route }) => {
  const { onSaveAddress, addressToEdit } = route.params || {};

  const [name, setName] = useState(addressToEdit ? addressToEdit.name : '');
  const [address, setAddress] = useState(
    addressToEdit ? addressToEdit.address.split(', ')[0] : ''
  );
  const [city, setCity] = useState(
    addressToEdit ? addressToEdit.address.split(', ')[1] : ''
  );
  const [state, setState] = useState(
    addressToEdit ? addressToEdit.address.split(', ')[2] : ''
  );
  const [country, setCountry] = useState(
    addressToEdit ? addressToEdit.address.split(', ')[3] : ''
  );

  const handleSave = () => {
    const updatedAddress = {
      id: addressToEdit ? addressToEdit.id : Date.now(),
      name,
      address: `${address}, ${city}, ${state}, ${country}`,
      isSelected: addressToEdit ? addressToEdit.isSelected : false,
    };
    onSaveAddress(updatedAddress);
    navigation.goBack();
  };

  const renderInput = (label, value, onChangeText) => (
    <View style={styles.inputContainer}>
      {value ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholder={value ? '' : label}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholderTextColor="#999"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Shipping Address</Text>
      </View>
      {renderInput('Full Name', name, setName)}
      {renderInput('Address', address, setAddress)}
      {renderInput('City', city, setCity)}
      {renderInput('State', state, setState)}
      {renderInput('Country', country, setCountry)}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>SAVE ADDRESS</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 20,
    },
    backButton: {
      fontSize: 24,
      color: '#000',
      marginRight: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000',
      marginLeft: 30,
    },
    inputContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 15,
      backgroundColor: '#fff',
    },
    label: {
      position: 'absolute',
      top: -10,
      left: 12,
      fontSize: 12,
      color: '#999',
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 4,
    },
    input: {
      fontSize: 16,
      color: '#333',
    },
    saveButton: {
      backgroundColor: '#DB3022',
      padding: 15,
      borderRadius: 35,
      alignItems: 'center',
      marginTop: 20,
    },
    saveButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
});

export default AddAddress;
