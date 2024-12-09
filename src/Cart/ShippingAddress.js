/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ShippingAddress = ({ navigation }) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St, Springfield, IL 62701, USA',
      isEditable: false,
    },
  ]);


  const addOrUpdateAddress = (newAddress) => {
    setAddresses((prevAddresses) => {
      const addressExists = prevAddresses.some(
        (address) => address.id === newAddress.id
      );
      if (addressExists) {
        return prevAddresses.map((address) =>
          address.id === newAddress.id ? newAddress : address
        );
      } else {
        return [...prevAddresses, newAddress];
      }
    });
  };

  const addNewAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]);
  };


  const handleAddAddress = () => {
    navigation.navigate('AddAddress', {
      onSaveAddress: addOrUpdateAddress,
    });
  };

  const handleEditAddress = (address) => {
    navigation.navigate('AddAddress', {
      onSaveAddress: addOrUpdateAddress,
      addressToEdit: address,
    });
  };

  const handleSelectAddress = (id) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id
        ? { ...address, isSelected: true }
        : { ...address, isSelected: false }
    );
    setAddresses(updatedAddresses);
  };


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
       <ScrollView contentContainerStyle={styles.addressList}>
        {addresses.map((address) => (
          <View key={address.id} style={styles.addressCard}>
            <View style={styles.addressInfo}>
              <View style={styles.upperText}>
                <Text style={styles.name}>{address.name}</Text>
                <TouchableOpacity onPress={() => handleEditAddress(address)}>
                  <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.addressText}>{address.address}</Text>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => handleSelectAddress(address.id)}
              >
                <Icon
                  name={
                    address.isSelected
                      ? 'checkbox'
                      : 'square-outline'
                  }
                  size={20}
                  color={address.isSelected ? '#222222' : '#555'}
                />
                <Text style={styles.checkboxText}>Use as the shipping address</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={handleAddAddress}>
        <Icon name="add-circle" size={60} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    elevation: 2,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  upperText:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  addressList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  addressInfo: {
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addressText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  checkboxText: {
    fontSize: 14,
    color: '#555',
    marginLeft: 5,
  },
  editText: {
    color: '#DB3022',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 30,
    overflow: 'hidden',
  },
});

export default ShippingAddress;
