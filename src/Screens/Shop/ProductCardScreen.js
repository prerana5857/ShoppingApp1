/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RecommendedItemsList from './RecommendedItemsList';
import BottomSheetComponent from '../BottomSheets/SizeBottomSheet';
import ColorBottomSheetComponent from '../BottomSheets/ColorBottomSheet';
import SuccessMessage from '../../SnakeBar/SnakeBar';
import {
  fetchProductDetailsById,
  fetchProductRatingsById,
  addItemToCart,
} from '../../Api/api';

const ProductCardScreen = ({route, navigation}) => {
  const {productId} = route.params;
  const [userId, setUserId] = useState(null);
  const [productData, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState('Size');
  const [selectedColor, setSelectedColor] = useState('Color');
  const [isBottomSheetComponentVisible, setBottomSheetComponentVisible] =
    useState(false);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [availableColors, setAvailableColors] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [activity, setActivity] = React.useState(false);

  useEffect(() => {
    const initializeUserId = async () => {
      const storedUserId = await AsyncStorage.getItem('userId');
      setUserId(storedUserId);
    };

    initializeUserId();
  }, []);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const [productDetails, ratings] = await Promise.all([
          fetchProductDetailsById(productId),
          fetchProductRatingsById(productId),
        ]);

        setProductData(productDetails);

        const avgRating =
          ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length ||
          0;
        setAverageRating(avgRating.toFixed(1));
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductData();
  }, [productId]);

  useEffect(() => {
    const fetchColors = async () => {
      if (productData) {
        const {colors} = productData;
        if (colors && Array.isArray(colors)) {
          const colorNames = colors.map(item => item.color);
          setAvailableColors(colorNames);
        }
      }
    };
    fetchColors();
  }, [productData]);

  const handleAddToCart = async () => {
    if (!userId) {
      Alert.alert('User not logged in!');
      return;
    }
    setActivity(true);

    try {
      const result = await addItemToCart(
        userId,
        productId,
        selectedSize,
        selectedColor,
        1,
      );
      if (result) {
        console.log('API Response:', result);
      }
    } catch (error) {
      console.log('Error adding item to cart:', error);
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigation.navigate('BagScreen');
      }, 2000);
      if (error.message === 'Item already exists in the cart') {
        Alert.alert('', 'This item is already in your cart!');
      } else {
        console.log('Error adding item to cart:', error);
      }
    } finally {
      setActivity(false);
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
  };
  const renderStars = rating => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name={
            i <= Math.floor(rating)
              ? 'star'
              : i - rating <= 0.5
              ? 'star-half'
              : 'star-outline'
          }
          size={16}
          color="#FFD700"
        />,
      );
    }
    return stars;
  };
  const calculateDiscountedPrice = (price, discount) => {
    return price - (price * discount) / 100;
  };

  if (isLoading) {
    return (
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <ActivityIndicator size="large" color="#00B0FF" />
      </View>
    );
  }
  const {product_price, product_discount, product_name} = productData;
  const discountedPrice = product_discount
    ? calculateDiscountedPrice(product_price, product_discount).toFixed(2)
    : product_price;

  if (!productData) {
    return (
      <View
        style={[
          styles.container,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <Text>Failed to load product details. Please try again later.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{product_name}</Text>
        <Text style={styles.headerTitle}>
          {productData?.product_name || 'Product Name'}
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <Image
          source={{uri: productData.product_image}}
          style={styles.productImage}
        />

        <View style={styles.selectorContainer}>
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setBottomSheetComponentVisible(true)}>
            <Text>{selectedSize}</Text>
            <Ionicons name="chevron-down" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selector}
            onPress={() => setBottomSheetVisible(true)}>
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

        <Text style={styles.brandName}>{productData.brand[0]?.name}</Text>
        <View style={styles.priceRating}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Ratings', {productId})}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {renderStars(averageRating)}
              <Text style={{marginLeft: 8}}>({averageRating})</Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {product_discount > 0 && (
              <Text style={styles.originalPrice}>
                R {product_price.toString()}
              </Text>
            )}
            <Text style={styles.discountedPrice}>
              R {discountedPrice.toString()}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{productData.description}</Text>

        <TouchableOpacity
          style={styles.infoButton}
          onPress={() => navigation.navigate('ShippingAddress')}>
          <Text style={styles.infoText}>Shipping info</Text>
          <Ionicons name="chevron-forward" size={16} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Text style={styles.infoText}>Support</Text>
          <Ionicons name="chevron-forward" size={16} color="black" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>You can also like this</Text>
        <RecommendedItemsList categoryId={productData.category_id} />
      </ScrollView>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>ADD TO CART</Text>
      </TouchableOpacity>
      {showSuccessMessage && (
        <SuccessMessage
          visible={showSuccessMessage}
          message="Item added to your cart!"
        />
      )}

      <BottomSheetComponent
        visible={isBottomSheetComponentVisible}
        onClose={() => setBottomSheetComponentVisible(false)}
        onSelectSize={size => setSelectedSize(size)}
        productId={productId}
      />
      <ColorBottomSheetComponent
        visible={isBottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
        onSelectColor={color => setSelectedColor(color)}
        colors={availableColors} // Pass fetched colors here
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
    shadowOffset: {width: 0, height: 2},
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
    paddingHorizontal: 16,
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
  originalPrice: {
    fontSize: 16,
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  discountedPrice: {fontSize: 18, fontWeight: 'bold', color: 'red'},
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
    backgroundColor: '#00B0FF',
    padding: 16,
    alignItems: 'center',
    borderRadius: 42,
    marginBottom: 8,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  successPopup: {
    position: 'absolute',
    top: '80%',
    left: '10%',
    right: '10%',
    backgroundColor: '#00B0FF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  successText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductCardScreen;
