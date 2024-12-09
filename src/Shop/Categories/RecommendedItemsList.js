import React, {useState} from 'react';
import {
  View,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-elements';



const RecommendedItemsList = ({navigation}) => {
  const recommendedItems = [
    {
      id: '1',
      name: 'Pullover',
      brand: 'Mango',
      price: '$50',
      rating: 4,
      image:
        'https://s3-alpha-sig.figma.com/img/01fd/466b/a394c0eba31d6c693fe12b53b1c01c51?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JtjXve5pYz~f4oewxD0olwQiYLVyOWZYD-gm8aJVxXVirqsi4Afc-w9niJva2SX0OvKhZAvVBFTana7dmIR-7KE3gBfSE09f1sKXphDZX8LYihWulsNwSTGThQ-45akODl4rCXsnc34x6OA7GQG1-x-UPgTOhdsr208d8qbAriSs3Cb76YZMUlJfFUNXSROkQCe~xfsR0ZVKxxTHyI6PxhMXeGpQa8H2TgBfy892eRm7EVeABi5FGGIqJX8XDCc4EFGBv4STpPwRbFUahGmWN5Mv800obxyZAx~c-QvDYjJhMo3thKpZfysx9htA4p8~qNmeeYpjKeISmhtkt1bv0A__',
    },
    {
      id: '2',
      name: 'Blouse',
      brand: 'Dorothy',
      price: '$70',
      rating: 5,
      image:
        'https://s3-alpha-sig.figma.com/img/744c/af4f/8cbe22e0d501d66b730b03c24f793383?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SKrQZAZGmHPX6NY65Y8fCbA~M36qrIhZWbCuOztxgz9TkSZTnvQJGquvtY2LJIpLzcXTR7M7Er5K7yBVMWVQouynnzskN8f82KZ6Vp3xy3tU-HSKZvCf-MiVXp~fImUZMKRWijuobdUjABolWtV4Zt4cR00kEE57e-BRwGZhJIl1G2KNB4zfVN97-OrGpIs8FHVTGbngkoVJ9au8U-qcf5fL2Ed~eh69n4MsQ6JwVXdGRKgcRXl5V18eMBnNVqgci~tAORegvrOR5PqAMSdVPj1dU1Xkgqjkny1GA78vT1y2FdqGv~SiwnN5t~DMQmuSP33~zAkI3l~20KPrgpvCUQ__',
    },
    {
      id: '3',
      name: 'Blouse',
      brand: 'Dorothy',
      price: '$80',
      rating: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/c8d6/cd3c/953d61faf9fd666897e97a67e9857028?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6FD1XCjB2~HqLIfulMGUaGbGFautusX95ezpDcM3D3XwsTG-gwUaG6Etb~E8qZIrpUbHAcdRklxNFLu6SmBjJUTdm4aunv7bPl5wtqMYTePYd1X0zL8uFx6~8dxU7JBdM6PyIBEYbtcwb6MWCutfLbQhpULGc4xqRWlP9CX0MpajWwT0wRCAicXJHA0MVZv0dU9cQHSV0Yzi0-E6FZU~cB-Rhu89Y8HD4RWdj2~YiV6wkJbPOSNxz8TNZR13m2gqlKomBnhVPi-jDmuGgQJ4F4xlfeUl-QZkpww017xYVYjHY6xO4nDb4oLNx~vJg~fDp9G2tVxzfHz5Fjc2Xl0Rw__',
    },
    {
      id: '4',
      name: 'Shirt',
      brand: 'Mango',
      price: '9$',
      image: 'https://s3-alpha-sig.figma.com/img/f3e5/6877/4c7febc96d7bcbc94151195223b06a90?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MPKRMbSatSAFn61qhXD4g5DSXC1OkLgb2s5GZxuoA7CS6DtAtJFLLdAP~P9UNWKJ~EeGqrAOTYKrAhSas~WKSJ-i9IHOKvnbP388fOjKesIJsI2vKH9VPSRCLV3ysY7Ygf03jc7-~bWSFaJEr-DUXI5sU75jr3drAQxt0NeLkWmLV2LydY302DfE21Kkk7zevtQcRkfEmFDjk6KKA9yqI0EF4hegVrDW~sbPRNg2CNrVej1aD-ry6Vv8yJ-5OHYgidUOlt8Ggas32cs54N7j6I0r~8p1ZudO94eAeatxp68GviH3jj52NHyBPdoNJbzkKqxZ-O1So8QELULWRJrSBw__',
      rating: 4,
    },
  ];
  const [liked, setLiked] = useState(recommendedItems.map(() => false));

  const toggleLike = (index) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const renderProduct = ({ item, index }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      {item.discount && (
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
      <TouchableOpacity onPress={() => toggleLike(index)} style={styles.likeButton}>
        <Icon name="heart" size={20} color={liked[index] ? 'red' : 'grey'} />
      </TouchableOpacity>
      <Text style={styles.brandText}>{item.brand}</Text>
      <Text style={styles.productName}>{item.name}</Text>
      <Rating
        imageSize={15}
        readonly
        startingValue={item.rating}
        style={styles.rating}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.currentPrice}>{item.price}</Text>
        {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
      </View>
    </View>
  );

  return (
    // <FlatList
    //   data={recommendedItems}
    //   renderItem={({item}) => (
    //     <View style={styles.card}>
    //       <TouchableOpacity style={styles.likeButton}>
    //         <MaterialIcons name="favorite-border" size={20} color="gray" />
    //       </TouchableOpacity>
    //       <Image source={{uri: item.image}} style={styles.image} />
    //       <Text style={styles.title}>{item.title}</Text>
    //       <Text style={styles.price}>{item.price}</Text>
    //     </View>
    //   )}
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   keyExtractor={(item, index) => index.toString()}
    //   contentContainerStyle={styles.listContainer}
    // />
    <FlatList
        data={recommendedItems}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        style={styles.productList}
        horizontal
      showsHorizontalScrollIndicator={false}
      />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: 190,
    height: 276,
    borderRadius:10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
  },
  likeButton: {
    position: 'absolute',
    bottom: 100,
    right: 5,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 5,
    elevation: 2,
  },
  brandText: {
    fontSize: 12,
    color: '#9b9b9b',
    marginTop: 8,
    paddingHorizontal: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  rating: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginVertical: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  currentPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  oldPrice: {
    fontSize: 12,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  sheetContent: {
    backgroundColor: 'white',
    padding: 20,
    height: 250,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sheetOption: {
    paddingVertical: 10,
  },
  filterOptionsContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 300,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterOption: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  // filterText: {
  //   fontSize: 16,
  // },
  closeButton: {
    alignItems: 'center',
    padding: 16,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  // // card: {
  // //   width: 150,
  // //   marginRight: 16,
  // //   padding: 10,
  // //   backgroundColor: 'white',
  // //   borderRadius: 10,
  // //   shadowColor: '#000',
  // //   shadowOffset: {width: 0, height: 2},
  // //   shadowOpacity: 0.3,
  // //   shadowRadius: 4,
  // //   elevation: 5,
  // //   alignItems: 'center',
  // //   position: 'relative',
  // // },
  // likeButton: {
  //   position: 'absolute',
  //   top: 10,
  //   right: 10,
  // },
  // image: {
  //   width: 130,
  //   height: 130,
  //   borderRadius: 8,
  //   marginBottom: 10,
  // },
  // title: {
  //   fontSize: 16,
  //   fontWeight: '600',
  //   color: '#333',
  //   marginBottom: 4,
  // },
  // price: {
  //   fontSize: 14,
  //   color: '#666',
  // },
  // card: {
  //   flexDirection: 'row',
  //   // alignItems: 'center',
  //   backgroundColor: '#fff',
  //   padding: 16,
  //   marginBottom: 20,
  //   borderRadius: 10,
  //   elevation: 2,
  // },
  // productImage: {
  //   width: 90,
  //   height: 90,
  //   marginRight: 16,
  //   marginBottom: 0,
  // },
  // productDetails: {
  //   flex: 1,
  // },
  // productName: {
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   color: '#222222',
  // },
  // productBrand: {
  //   fontSize: 12,
  //   color: 'grey',
  // },
  // productPrice: {
  //   fontSize: 14,
  //   color: 'black',
  // },
  // favoriteIcon: {
  //   padding: 8,
  //   top: 30,
  //   right: -85,
  //   backgroundColor: '#fff',
  //   borderRadius: 60,
  // },
  // Icon: {
  //   top: 55,
  // },
  // bottomNav: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding: 16,
  //   borderTopWidth: 1,
  //   borderColor: '#ddd',
  // },
});

export default RecommendedItemsList;
