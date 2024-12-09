import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecommendedItemsList from './RecommendedItemsList';
import BottomSheetComponent from './SizeBottomSheet';
import ColorBottomSheetComponent from './ColorBottomSheet';


const ProductCardScreen = ({navigation}) => {
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');
  const [isBottomSheetComponentVisible, setBottomSheetComponentVisible] = useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);


  const images = [
    'https://s3-alpha-sig.figma.com/img/fcaf/d160/32c84320feb3909ded342aacc494eabc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iGbNR4yVM7XB-Z8~pvcwDlMLhZdzH1EmolFgEqr7Do35yGJJyJ2VGzPWS0g6a5Rb5D7Ue4LydiiAQ8m~1e8ERHY8-alxCV2bWxp0EOYY9hXVSLOxowppmZwf5Q5FvzrnTSVgB9hI~hIA3JFn3L94GO-Sw1xDT~-OQSRBD-BTpjnGr1ZmwJSmzGx~aJJTjtL5KBCWNyZc0Rj-tzh~MRnZs9IJGoz62S2SOwzUdOR0XtYA89GgG1ulflgoF44~sr-yo8nCskM861FXvbMFpLm60vWg~7Yq50LKv6qn5WVRVeONTB5rgEeo9RdW-eXR207rP3Y-r7Zsa-CgHl0QIPx5ZA__',
    'https://s3-alpha-sig.figma.com/img/e7a1/cf45/75298675ac8011fa936bb38323557b85?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ch7uxwxUNisVMVQNASlz-531-28cXFFGa~KvLxFCWM1Y8ae4~hMEgEN~vuvS-npbG5VxxjjJu2-U~ZM0e7Eg0ppAKn25PcwoQwmN8zSPQw1Uqj0LhOlkLtCIdMoU-WpRbjJ9qhy77UaX-MBOH0PIF-ZV8TW2L4yTxz5mfiSioGRSNDm8a6cRHyC5cD4~58oQ-ftAeDbJUeV-7k7T49dtilJuwpwsn~8JEW7veFsypTCpHIAVGmFfrqvu0HH3xLjLk68SHxt6hUMJ7otiuoGcJgncD1xypv2ikoOMCPeeKwvdTRBPTdB1Z6Fh6YdLH39csSW6VehLpmxHWl87XyfKSw__',
  ];

  const toggleLike = () => {
    setLiked(!liked);
  };

  const renderImage = ({item}) => (
    <Image source={{uri: item}} style={styles.productImage} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Short dress</Text>
        <TouchableOpacity>
          <MaterialIcons name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
          <FlatList
          data={images}
          renderItem={renderImage}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
        <View style={styles.dotsContainer}>
          {images.map((_, index) => (
            <View key={index} style={styles.dot} />
          ))}
        </View>

        <View style={styles.selectorContainer}>
          <TouchableOpacity style={styles.selector} onPress={() => setBottomSheetComponentVisible(true)}
          >
            <Text>{selectedSize}</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.selector}  onPress={() => setBottomSheetVisible(true)}>
            <Text>{selectedColor}</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleLike}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={24}
              color={liked ? 'red' : 'black'}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.brandName}>H&M</Text>
        <View style={styles.priceRating}>
          <Text style={styles.rating}  onPress={() => navigation.navigate('Ratings')}>⭐⭐⭐⭐⭐</Text>
          <Text style={styles.price}>$19.99</Text>
        </View>
        <Text style={styles.description}>
          Short dress in soft cotton jersey with decorative buttons down the
          front and a wide, frill-trimmed hem.
        </Text>

        <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate('ShippingAddress')}>
          <Text style={styles.infoText}>Shipping info</Text>
          <Ionicons name="chevron-forward" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Support</Text>
          <Ionicons name="chevron-forward" size={16} color="black" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>You can also like this</Text>
        <RecommendedItemsList/>
      </ScrollView>
      <TouchableOpacity style={styles.addToCartButton}  onPress={() => navigation.navigate('Bag')}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
      <BottomSheetComponent
        visible={isBottomSheetComponentVisible}
        onClose={() => setBottomSheetComponentVisible(false)}
        onSelectSize={(size) => setSelectedSize(size)}
      />
      <ColorBottomSheetComponent
        visible={isBottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
        onSelectColor={(Color) => setSelectedColor(Color)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F9F9F9'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {fontSize: 16, fontWeight: 'bold'},
  content: {paddingBottom: 80},
  productImage: {width: 375, height: 375},
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    width: 150,
    marginRight: 16,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
    margin: 4,
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal:16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  priceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  rating: {color: '#FFD700'},
  description: {paddingHorizontal: 16, paddingVertical: 8, color: '#666'},
  infoButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  infoText: {fontSize: 16},
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  recommendedItem: {width: 120, marginRight: 16},
  recommendedImage: {width: '100%', height: 150, borderRadius: 8},
  recommendedTitle: {fontSize: 14, paddingTop: 8},
  addToCartButton: {
    bottom: 4,
    left: 8,
    right: 0,
    width: 343,
    height: 48,
    backgroundColor: '#DB3022',
    padding: 12,
    alignItems: 'center',
    borderRadius: 42,
  },
  addToCartText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});

export default ProductCardScreen;
