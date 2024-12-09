import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ordersData = [
  { id: '1', orderNumber: '№1947034', trackingNumber: 'IW3475453455', date: '05-12-2019', quantity: 3, amount: '112$', status: 'Delivered' },
  { id: '2', orderNumber: '№1947034', trackingNumber: 'IW3475453455', date: '05-12-2019', quantity: 3, amount: '112$', status: 'Processing' },
  { id: '3', orderNumber: '№1947034', trackingNumber: 'IW3475453455', date: '05-12-2019', quantity: 3, amount: '112$', status: 'Cancelled' },
];

export default function MyOrders ({navigation}) {
  const [selectedTab, setSelectedTab] = useState('Delivered');

  const renderOrderItem = ({ item }) => (
    item.status === selectedTab && (
      <View style={styles.orderCard}>
        <Text style={styles.orderNumber}>Order {item.orderNumber}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.tracking}>Tracking number: {item.trackingNumber}</Text>
        <Text style={styles.details}>Quantity: {item.quantity}</Text>
        <Text style={styles.details}>Total Amount: {item.amount}</Text>
        <TouchableOpacity style={styles.detailsButton}  onPress={() => navigation.navigate('OrderDetail')}>
          <Text style={styles.detailsButtonText}>Details</Text>
        </TouchableOpacity>
        <Text style={[styles.status, item.status === 'Delivered' ? styles.delivered : item.status === 'Processing' ? styles.processing : styles.cancelled]}>
          {item.status}
        </Text>
      </View>
    )
  );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.upperheader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
      <Text style={styles.header}>My Orders</Text>
      <View style={styles.tabsContainer}>
        {['Delivered', 'Processing', 'Cancelled'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={ordersData}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.ordersList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  upperheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    marginTop: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color:'#222222',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginLeft:-12,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 20,
    backgroundColor: '#F9F9F9',
  },
  activeTab: {
    backgroundColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#FFF',
  },
  ordersList: {
    paddingBottom: 20,
    marginTop:12,
  },
  orderCard: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  orderNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#222222',
  },
  date: {
    fontSize: 12,
    left:200,
    bottom:24,
    color: '#888',
    marginBottom: 5,
  },
  tracking: {
    fontSize: 14,
    marginTop:-20,
    marginBottom: 5,
    color:'#222222',
  },
  details: {
    fontSize: 14,
    marginBottom: 5,
  },
  detailsButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 35,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  detailsButtonText: {
    fontSize: 14,
    // fontWeight: 'bold',
    color:'#222222',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  delivered: {
    color: 'green',
  },
  processing: {
    color: 'orange',
  },
  cancelled: {
    color: 'red',
  },
});
