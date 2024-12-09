import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const CheckoutScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping address</Text>
        <View style={styles.card}>
          <TouchableOpacity>
            <Text style={styles.changeText} onPress={() => navigation.navigate('ShippingAddress')}>Change</Text>
          </TouchableOpacity>
          <Text style={styles.addressText}>Jane Doe</Text>
          <Text style={styles.addressText}>3 Newbridge Court</Text>
          <Text style={styles.addressText}>Chino Hills, CA 91709, United States</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.paymentContainer}>
          <Image source={{uri: 'https://img.icons8.com/color/48/mastercard-logo.png'}} style={styles.paymentIcon} />
          <Text style={styles.paymentText}>**** **** **** 3947</Text>
          <TouchableOpacity>
            <Text style={styles.changeText} onPress={() => navigation.navigate('PaymentMethod')}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Delivery method</Text>
        <View style={styles.deliveryOptions}>
          <TouchableOpacity style={styles.deliveryOption}>
            <Image source={{uri: 'https://img.icons8.com/color/48/fedex.png'}} style={styles.deliveryIcon} />
            <Text>FedEx</Text>
            <Text>2-3 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deliveryOption}>
            <Image source={{uri: 'https://img.icons8.com/color/48/usps.png'}} style={styles.deliveryIcon} />
            <Text>USPS</Text>
            <Text>2-3 days</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deliveryOption}>
            <Image source={{uri: 'https://img.icons8.com/color/48/dhl.png'}} style={styles.deliveryIcon} />
            <Text>DHL</Text>
            <Text>2-3 days</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.summaryRow}>
          <Text>Order:</Text>
          <Text style={styles.price}>112$</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Delivery:</Text>
          <Text style={styles.price}>15$</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text>Summary:</Text>
          <Text style={styles.price}>127$</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText} onPress={() => navigation.navigate('SucessOrder')}>SUBMIT ORDER</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F9F9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    color:'#222222',
  },
  backButton: {
    fontSize: 24,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#222222',
    marginLeft: 70,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color:'#222222',
  },
  card: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 4,
    color:'#222222',
    marginTop:0,
  },
  changeText: {
    color: '#DB3022',
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginTop: 0,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  paymentIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  paymentText: {
    flex: 1,
    fontSize: 16,
    color:'#222222',
  },
  price:{
    fontWeight:'bold',
    color:'#222222',
  },
  deliveryOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryOption: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    color:'#222222',
    width: '30%',
  },
  deliveryIcon: {
    width: 50,
    height: 30,
    marginBottom: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    color:'#222222',
  },
  submitButton: {
    backgroundColor: '#DB3022',
    paddingVertical: 12,
    borderRadius: 35,
    alignItems: 'center',
    marginVertical: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CheckoutScreen;
