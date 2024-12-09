import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.header}>
              <Icon name="search-outline" size={24} color="black" style={styles.searchIcon} />
            </View>
            <Text style={styles.headerText}>My profile</Text>
            <View style={styles.profileContainer}>
              <Image
                source={{ uri: 'https://s3-alpha-sig.figma.com/img/581b/273d/1a360f84cfd9a99708fc889ab7d86e6c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IHjLZXoRgLSWyLZLkfnWY87Rvo7G2LmRaeuylNQcpxy1Xjhhf-jVGusols9jLcoIPY2xNY-eWqhfbUSBnxlMVSMoE-s2xA6uoZsTCmzXjbu9v46ypKujP3RTPMxSIZbQdknltfdcsZOER7ltNd6VlQrl4wvmGXSvefxIq6cTCcUlMLiykqx6Igwxn99QVg3Eo5iPkhJU5neCqTKt-j3WdF~3YSUdPE7fak6nUdSNSsiv3~zd9LHhODsHE-bG6sF15jiQlO7nPEulPE-rot5~YigdcyAx8MHdnAMHZW-p4F0hrg6AIYyJwtLw55SbqGGw6IexgVTqdrGCHTSkh-hlnQ__' }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.profileName}>Matilda Brown</Text>
                <Text style={styles.profileEmail}>matildabrown@mail.com</Text>
              </View>
            </View>

            <View style={styles.optionList}>
              <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('MyOrders')}>
                <View>
                  <Text style={styles.optionTitle}>My orders</Text>
                  <Text style={styles.optionSubtitle}>Already have 12 orders</Text>
                </View>
                <Icon name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('ShippingAddress')}>
                <View>
                  <Text style={styles.optionTitle}>Shipping addresses</Text>
                  <Text style={styles.optionSubtitle}>3 addresses</Text>
                </View>
                <Icon name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('PaymentMethod')}>
                <View>
                  <Text style={styles.optionTitle}>Payment methods</Text>
                  <Text style={styles.optionSubtitle}>Visa **34</Text>
                </View>
                <Icon name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionItem}>
                <View>
                  <Text style={styles.optionTitle}>Promocodes</Text>
                  <Text style={styles.optionSubtitle}>You have special promocodes</Text>
                </View>
                <Icon name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionItem}  onPress={() => navigation.navigate('Ratings')}>
                <View>
                  <Text style={styles.optionTitle}>My reviews</Text>
                  <Text style={styles.optionSubtitle}>Reviews for 4 items</Text>
                </View>
                <Icon name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.optionItem} onPress={() => navigation.navigate('Settings')}>
                <View>
                  <Text style={styles.optionTitle}>Settings</Text>
                  <Text style={styles.optionSubtitle}>Notifications, password</Text>
                </View>
                <Icon name="chevron-forward-outline" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    marginTop:0,
    marginBottom: 10,
    alignItems:'flex-end',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginTop:-4,
    marginBottom: 16,
  },
  searchIcon: {
    padding: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    marginTop:10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  profileEmail: {
    fontSize: 12,
    color: '#666',
  },
  optionList: {
    borderTopWidth: 0.25,
    borderTopColor: '#E0E0E0',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 0.25,
    borderBottomColor: '#E0E0E0',
  },
  optionTitle: {
    fontSize: 14,
    color: '#000',
  },
  optionSubtitle: {
    fontSize: 10,
    color: '#999',
  },
});

export default ProfileScreen;
