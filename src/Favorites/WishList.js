import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';

import SortByBottomSheetComponent from '../Shop/Categories/SortByBottomSheet';

const wishlistData = [
  {
    id: '1',
    name: 'Dress',
    brand: 'H&M',
    color: 'Red',
    size: 'M',
    price: '19.99$',
    rating: 4.5,
    image: 'https://s3-alpha-sig.figma.com/img/1770/088f/bba96a73adb59b4213783033221c4b94?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TdIQvVVwxdZYumEuWeF3FUKi7KYdmVecA8aGx5Lg2-w~npOWeRP8k1qdO7Tat~0NQlxvhQiY71vAlicGbce3bWl8FvaWRh~xW-XINEmMuYHuQ-oAmYbh8heo78NNNvzVcUhtuIpcxSGRuH72ij6RdupiWJjLb7gZ6B~PXO6W~3AQVyPtMepFc7MmFFmXt-eUWQm9aKv2E8IynaEZUAKDNqhSB9FTnATFE3wj8YArz8Z20zDeCWCuixRHhhGH~EZWmyXU0ExhtBsxQJi7UVRLyIfBfWzu21iBm5~DBFyPqIFU4sYpjueFISVfLuaiX1XMLayyF01k~CwI5DM-0epb2g__',
  },
  {
    id: '2',
    name: 'Pullover',
    brand: 'Mango',
    color: 'Blue',
    size: 'L',
    price: '51$',
    rating: 4.0,
    image: 'https://s3-alpha-sig.figma.com/img/b694/c87f/2961d9881ed06f1fd8d506c7100ba82c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Go0qfFg9q25F-NZSmqZvoR4JZxGu5JxE9OAJrUYnkQ9dMrzmXTCNlSqbmaWgnfAkZW45j7CaXwjtu3IvvImz1HyR3-IbzdYlfsRCB4oP7kCQrZ4~44QEsbEl9FVbBB3iihZrlpxD7zW28lWPnqXcATffblRbmySiCfwY66aD5APZV3Gz~JPqB9DYJd895qGwwtWjxOXccoUVIic3Qox6acpFkdcHv6B6Q-pqj-4r1LaGQeIUn~Nsgf6fuvAssDxMDMOhVyGgtNOjUiuOHB29OKUne2ND1PF2P50Jp4A9x6BkIYinEh65~7BhDcmB5ADA9MFew6zBfNPdYBgxmiDWwQ__',
  },
  {
    id: '3',
    name: 'Blouse',
    brand: 'Dorothy',
    color: 'White',
    size: 'S',
    price: '34$',
    rating: 4.8,
    image: 'https://s3-alpha-sig.figma.com/img/3c13/374e/76ca790ec9f7241364cd99e92c3b1b51?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqA5jJVEl1Q7YzjZX13cv48oWmvWXt9LCHIh7B4xP78yF5nmTq3hAMT40x2-uep8DtA7O88aRjpKEKm1z~Fviv9a8cB6udohrixDIHJd4ih0kpI-GoNkhKxsAf~-nmWVhNTnOozYzS2hzEifFARft6s6Pu56BRG3lPz12-8sWvKv5-pDrFbgLRpjca4feQzq8kYa6hLCTBcqaAr0LfPvlb1tr-2qwA0Sb030aXPRocpguTFMoUcGuRd-hXOZADFtDJjxvsC6T5KARvIMrdoHQdYwnhXx-X85C-QrKjUdVrcU5hdXKHp4i9IogHJ-mB~U-CdEi51LuQnrMDyd9ZPHbA__',
  },
];

const Wishlist = ({ navigation }) => {
  const [wishlist, setWishlist] = useState(wishlistData);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState('Sort By');


  const toggleFavorite = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  };

  const renderWishlistItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productInfo}>Color: {item.color}    Size: {item.size}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} color="#FFD700" />
          <Text style={styles.ratingText}>{item.rating}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.addToCartIcon}
        onPress={() => navigation.navigate('MyBag', { productId: item.id })}
        // onPress={() => navigation.navigate('MyBag')}
      >
        <Iconn name="shopping" size={20} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.favoriteIcon}
        onPress={() => toggleFavorite(item.id)}
      >
        <AntDesign name="close" size={16} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchButton}>
        <Icon name="search-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Favorites</Text>
      <View style={styles.scrollbar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Summer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>T-Shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Sleeveless</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>High Neck</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.filterSortContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('FilterScreen')}>
          <Icon name="filter-outline" size={18} color="black"/>
          <Text>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton} onPress={() => setBottomSheetVisible(true)}>
          <Text>{selectedSortBy}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => navigation.navigate('GridWishList')}>
          <Icon name="list-sharp" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={wishlist}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.wishlistContainer}
      />
      <SortByBottomSheetComponent
        visible={isBottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
        onSelectSortBy={(SortBy) => setSelectedSortBy(SortBy)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchButton: {
    position: 'absolute',
    right: 16,
    top:4,
    padding:4,
    fontWeight:'bold',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    color: '#222222',
  },
  tabs: {
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    marginBottom:8,
    marginTop:8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#222222',
    borderRadius: 20,
    marginRight: 10,
  },
  tabText: {
    color: '#fff',
    fontSize:12,
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    margin: 8,
    backgroundColor: '#f9f9f9',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortButton: {
  },
  wishlistContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 3,
  },
  productImage: {
    width: 90,
    height: 130,
    borderRadius: 5,
  },
  productDetails: {
    flex: 1,
    paddingHorizontal: 15,
    color:'#222222',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
  },
  productBrand: {
    fontSize: 14,
    color: '#222222',
  },
  productInfo: {
    fontSize: 14,
    color: '#222222',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#222222',
  },
  favoriteIcon: {
    padding: 10,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addToCartIcon: {
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor:'#DB3022',
    borderRadius:25,
  },
});

export default Wishlist;
