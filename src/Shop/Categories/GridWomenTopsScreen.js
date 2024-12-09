import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-elements';
import SortByBottomSheetComponent from './SortByBottomSheet';


const GridWomenTops = ({navigation}) => {
  const products = [
    {
      id: '1',
      name: 'T-Shirt SPANISH',
      brand: 'Mango',
      price: '9$',
      image:
      'https://s3-alpha-sig.figma.com/img/538f/4b85/9bcd988842505bc7673b2c97a627a114?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZaYAnnks6EDIoIeNDtrg4eXTvU~avzh~L3mFguwe7bNuwo2RSCQTqjE0qm5dIX9PrLspBAq-HWhgy7C5ymYRk4GYVE8gJ~UPL-mB5NOkRWfan8QGjfAlmgn9FXpNT9cOwyhvMoCPkkvubBlr~F9CBMrE9FBGY-xwzgOnrUbPHp3~TrvWVBDLtE~HfeOMn3I8eUPw12PZyU7lhLCcyfFQC9VNWvR-3psCo4BSSclq6NW~eROWEZ5BAlXlZtp6~w3qU9dQH4BU5lQ-A9Se5klHbv6p3XGcoUyLMXWqNLumQmYV1MBimExjW6hGA4Nu~fPIqobG42NlIEtxv2ptPfG~g__',
      rating: 4,
    },
    {
      id: '2',
      name: 'Blouse',
      brand: 'Dorothy Perkins',
      price: '14$',
      image:
      'https://s3-alpha-sig.figma.com/img/fa11/6ce9/5fe27c6f7b496e811aa346d85d4408ce?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ues5uT8Faljsnr1FfS-TBcW1lOLjLrY5cm6lA9mmfgSVZWSBwIQCuIv~znhaRVM9Q9TqDjUf8dSLGQXrugY4NZ2tnBrjTGKh6TQ1m1AidMaXPTwQ7~O6wdxhYak3eCIfV9zxTeugr3P-mGHff~Jvxu96gMZq6ylzZ7qtJh9VPnMm1LshWd0MOaETF9cSeDVCYEVazd8WtSOK1c-P9xPmb~mIG4H~IwY0zzIreiJU7SVrUH7miM3GSMxb8Nt0ydRpSbZhMLT5IJjiFJQFE8xvEfaeyca~nRUuwgba08xaySORlYIhti9zQiDykrXYXhMig4OZXsCrm109OxqWrXvy9w__',
      rating: 5,
      discount: '20%',
      oldPrice: '21$',
    },
    {
      id: '3',
      name: 'T-Shirt SPANISH',
      brand: 'Mango',
      price: '9$',
      image:
      'https://s3-alpha-sig.figma.com/img/538f/4b85/9bcd988842505bc7673b2c97a627a114?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZaYAnnks6EDIoIeNDtrg4eXTvU~avzh~L3mFguwe7bNuwo2RSCQTqjE0qm5dIX9PrLspBAq-HWhgy7C5ymYRk4GYVE8gJ~UPL-mB5NOkRWfan8QGjfAlmgn9FXpNT9cOwyhvMoCPkkvubBlr~F9CBMrE9FBGY-xwzgOnrUbPHp3~TrvWVBDLtE~HfeOMn3I8eUPw12PZyU7lhLCcyfFQC9VNWvR-3psCo4BSSclq6NW~eROWEZ5BAlXlZtp6~w3qU9dQH4BU5lQ-A9Se5klHbv6p3XGcoUyLMXWqNLumQmYV1MBimExjW6hGA4Nu~fPIqobG42NlIEtxv2ptPfG~g__',
      rating: 4,
      discount: '20%',
      oldPrice: '11$',
    },
    {
      id: '4',
      name: 'Shirt SPANISH',
      brand: 'Mango',
      price: '9$',
      image:
      'https://s3-alpha-sig.figma.com/img/fa11/6ce9/5fe27c6f7b496e811aa346d85d4408ce?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ues5uT8Faljsnr1FfS-TBcW1lOLjLrY5cm6lA9mmfgSVZWSBwIQCuIv~znhaRVM9Q9TqDjUf8dSLGQXrugY4NZ2tnBrjTGKh6TQ1m1AidMaXPTwQ7~O6wdxhYak3eCIfV9zxTeugr3P-mGHff~Jvxu96gMZq6ylzZ7qtJh9VPnMm1LshWd0MOaETF9cSeDVCYEVazd8WtSOK1c-P9xPmb~mIG4H~IwY0zzIreiJU7SVrUH7miM3GSMxb8Nt0ydRpSbZhMLT5IJjiFJQFE8xvEfaeyca~nRUuwgba08xaySORlYIhti9zQiDykrXYXhMig4OZXsCrm109OxqWrXvy9w__',
      rating: 4,
    },
  ];

  const [liked, setLiked] = useState(products.map(() => false));

  const toggleLike = index => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };

  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState('Sort By');


  const renderProduct = ({item, index}) => (
    <View style={styles.productCard}>
      <Image source={{uri: item.image}} style={styles.productImage} onPress={() => navigation.navigate('ProductCardScreen')}/>
      {item.discount && (
        <View style={styles.discountBadge} onPress={() => navigation.navigate('ProductCardScreen')}>
          <Text style={styles.discountText}>{item.discount}</Text>
        </View>
      )}
      <TouchableOpacity
        onPress={() => toggleLike(index)}
        style={styles.likeButton}>
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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Women's Tops</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>T-shirts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Crop tops</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Sleeveless</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>HighNeck</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('FilterScreen')}>
          <Icon name="filter" size={20} />
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton} onPress={() => setBottomSheetVisible(true)} >
            <Text>{selectedSortBy}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => navigation.navigate('WomenTopsScreen')}>
          <Icon name="list-sharp" size={18} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        showsVerticalScrollIndicator={false}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 35,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 8,
  },
  sortText: {
    color: '#888',
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    marginLeft: 4,
  },
  tab: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#222222',
    borderRadius: 20,
    marginRight: 8,
    // elevation: 1,
  },
  tabText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    textAlign: 'center',
  },
  productList: {
    paddingHorizontal: 8,
  },
  productCard: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  productImage: {
    width: '100%',
    height: 236,
    borderRadius: 10,
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
    top: 220,
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
});

export default GridWomenTops;
