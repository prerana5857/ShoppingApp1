import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const items = [
  {
    id: '1',
    name: 'T-Shirt',
    color: 'Gray',
    size: 'L',
    price: 30,
    image:
      'https://s3-alpha-sig.figma.com/img/6e2a/6075/d2aebb9b52db31deea621f309362bab4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPDuT0EwznMyA2jMdoYeJr-SIoGE~5WX865F4F7reGfOwfTzRF5QvXmExUnN6Tyek-WMZCmQs00GpuUzcHzCYQolBbfIbBBAv7ZFEYKxrL98UkBYkp5UYMPl4yAKAFQJ9DVWsP3QSI3pGMGMXgA6w5N2n~Zh0BBT7z2bB2I0KhqlKM-GQXWDC9mqj8XVov~VvQJqgFKPMyaCbUYteE0QsBkqUqYjnr1wIT5EhTtd3l0ocvnJrel3F2DSCxvSCp9Dnxq-tMVT~YuHe3aE1VXYGuKdAdeAoDOjQnlfFxxFATXWCQDItRs1rmwJpM-2OSChIG23HwSbjWIyvHM76yhjhA__',
  },
  {
    id: '2',
    name: 'Pullover',
    color: 'Black',
    size: 'L',
    price: 51,
    image:
      'https://s3-alpha-sig.figma.com/img/1821/5f62/e259b4c9081785e2fb7f4b553d1a8023?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g00NYwBSC36iiEYIxySea9zNkX6WpNBwrWym0Oo2s7504fqwOAZHEW4dE7GjVbyBtE1cIv8hMqOEtJ4J6zCDMAe0cwQ0rILxleBUrr3oEELiZi4F893xtNOrjFNvhUBlsdO~yx~-3hjuSysC1X3~IZWg-Tz9KTSPeDnMx0Eqb3GjdHmpc01uWE~BMUtHPIF7xqgUj-Oh4gD-WDNb3MTbvyz-X-JuDMwGRP9zfnBxHodulROGvYGj~zXlrMRlRAO-VFS5IzTnQ~x~Ydgx5WqSHa0sek~7gnriBgvKuBMj3i2R9POc86Qi7W8~y292rS51Vy3s4qOLLzm1AJxDESwz5w__',
  },
  {
    id: '3',
    name: 'Sport Dress',
    color: 'Black',
    size: 'M',
    price: 43,
    image:
      'https://s3-alpha-sig.figma.com/img/5e93/8ec8/ffc8353c2e4119cf43ecf6db7e381d9d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Om5zBoKHz-UlPK7F3eZlC9Yx~M-mZFoOflWmQSCnLyJMAHTZWh72PFvumy6qzVwowJvR091H3O4O3g0lHZCWOxhBDKM~aILcNSqO6DLLZ~RCdcgD791F2tOBrarKmxXLvaz2ILK13~pCIPQYK8hnyj7b9yNJBPTq~G~aVrE3LXsIEGNH~4g4A0aXisUQWRAUfT2RCCGuXPffQeyGLVxueY9IG2b2mXc35Hgom7gzSPiKw~Z893vJPmnNvEVHhowS3qnTV~AVhOk~OR0faDbi1GTyg~C8ySjUat4FtEVQ3Rbseyvk2JDyF0CfSXSdfO3URI0HgSTVrcHmMY5v2kIDVw__',
  },
];

const BagScreen = ({navigation}) => {
  const [quantity, setQuantity] = useState({1: 1, 2: 1, 3: 1});
  const [promoCode, setPromoCode] = useState('');
  const updateQuantity = (id, type) => {
    setQuantity(prevQuantity => ({
      ...prevQuantity,
      [id]:
        type === 'increment'
          ? prevQuantity[id] + 1
          : Math.max(1, prevQuantity[id] - 1),
    }));
  };



  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>
          Color: {item.color} Size: {item.size}
        </Text>
        <View style={styles.itemMore}>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={16} color="#222222" />
          </TouchableOpacity>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 'decrement')}>
            <Icon name="remove-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity[item.id]}</Text>
          <TouchableOpacity
            onPress={() => updateQuantity(item.id, 'increment')}>
            <Icon name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </View>
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * quantity[item.id],
    0,
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.searchButton}>
        <Icon name="search-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.header}>My Bag</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
      <View style={styles.promoCodeContainer}>
        <TextInput
          style={styles.promoInput}
          placeholder="Enter your promo code"
          value={promoCode}
          onChangeText={setPromoCode}
        />
        <TouchableOpacity style={styles.promoButton}>
          <Icon name="arrow-forward-circle" size={28} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.totalAmount}>Total amount: ${totalPrice}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => navigation.navigate('CheckOutScreen')}>
        <Text style={styles.checkoutText}>CHECK OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F9F9F9'},
  searchButton: {
    position: 'absolute',
    right: 16,
    top: 4,
    padding: 4,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 24,
    marginTop: 44,
    color: '#222222',
  },
  modalOptionText: {color: 'red'},
  list: {paddingHorizontal: 16},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 12,
  },
  itemMore:{
    display:'flex',
    left: 200,
    bottom: 50,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: -10,
    marginTop: -10,
    marginBottom: -10,
  },
  itemDetails: {flex: 1},
  itemName: {fontSize: 16, fontWeight: 'bold', color: '#222222'},
  itemDescription: {fontSize: 11, color: 'gray'},
  quantityContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 5},
  quantity: {marginHorizontal: 10, fontSize: 16},
  itemPrice: {fontSize: 14, fontWeight: 'bold'},
  promoCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  promoInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginRight: 10,
  },
  promoButton: {
    padding: 10,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  checkoutButton: {
    backgroundColor: '#DB3022',
    borderRadius: 35,
    padding: 12,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  checkoutText: {color: 'white', fontSize: 16, fontWeight: 'bold'},
});

export default BagScreen;
