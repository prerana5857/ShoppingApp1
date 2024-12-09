import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SortByBottomSheetComponent from './SortByBottomSheet';
import { fonts } from 'react-native-elements/dist/config';


const data = [
  {
    id: '1',
    name: 'Dress',
    brand: 'H&M',
    price: '19.99$',
    image:
      'https://s3-alpha-sig.figma.com/img/fcaf/d160/32c84320feb3909ded342aacc494eabc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iGbNR4yVM7XB-Z8~pvcwDlMLhZdzH1EmolFgEqr7Do35yGJJyJ2VGzPWS0g6a5Rb5D7Ue4LydiiAQ8m~1e8ERHY8-alxCV2bWxp0EOYY9hXVSLOxowppmZwf5Q5FvzrnTSVgB9hI~hIA3JFn3L94GO-Sw1xDT~-OQSRBD-BTpjnGr1ZmwJSmzGx~aJJTjtL5KBCWNyZc0Rj-tzh~MRnZs9IJGoz62S2SOwzUdOR0XtYA89GgG1ulflgoF44~sr-yo8nCskM861FXvbMFpLm60vWg~7Yq50LKv6qn5WVRVeONTB5rgEeo9RdW-eXR207rP3Y-r7Zsa-CgHl0QIPx5ZA__',
  },
  {
    id: '2',
    name: 'Pullover',
    brand: 'Mango',
    price: '51$',
    image:
    'https://s3-alpha-sig.figma.com/img/6e2a/6075/d2aebb9b52db31deea621f309362bab4?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EPDuT0EwznMyA2jMdoYeJr-SIoGE~5WX865F4F7reGfOwfTzRF5QvXmExUnN6Tyek-WMZCmQs00GpuUzcHzCYQolBbfIbBBAv7ZFEYKxrL98UkBYkp5UYMPl4yAKAFQJ9DVWsP3QSI3pGMGMXgA6w5N2n~Zh0BBT7z2bB2I0KhqlKM-GQXWDC9mqj8XVov~VvQJqgFKPMyaCbUYteE0QsBkqUqYjnr1wIT5EhTtd3l0ocvnJrel3F2DSCxvSCp9Dnxq-tMVT~YuHe3aE1VXYGuKdAdeAoDOjQnlfFxxFATXWCQDItRs1rmwJpM-2OSChIG23HwSbjWIyvHM76yhjhA__'  },
  {
    id: '3',
    name: 'Blouse',
    brand: 'Dorothy',
    price: '34$',
    image:
    'https://s3-alpha-sig.figma.com/img/42ba/43af/9999902f1278824120c0dec8686180c5?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D3syoA7KIV3RdNaJVhZH~8Zyk5lKJhrn7rMTcXsiay0ety~zChrWRCn5uh59PwB7y6Ccr70ECYn5xnrFyV9xabLpH7waN9KnMOGcdMRSCXc9-0-5B5pMurPY1plAoBgj~kA54FvdJbZgT~PGy9QAowaoMiV1XILqbA2qbDnCEdZqGQmXz4XCudt8moZ4GTRwoGqYxkbmoXSRsRlInOXipeHeHmzb97hKbdMY54NHH1Ao0~K7U9I9kI4nvjyJGtRQU00mKM4GOoD8-IXiCSOEO4GPQwBB9iYfJD872iMI5XTKxrsHmkKRAv4mmDLw4cegfAcNK5cKyQra0EZwWxl3uw__',
  },
  {
    id: '4',
    name: 'T-shirt',
    brand: 'Lost Ink',
    price: '125$',
    image:
      'https://s3-alpha-sig.figma.com/img/1e61/4675/147da579254b3012302de5304dcb0db0?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4LwR5a4LZzaPOZJsAQyuX36AKWfqHFpp0Od389VCxzcQFsQSSjIiHardCrVlovKGL8jU2AZ2Ru1Vo0q7cdbRl8f54L0fgDvP8HVLccNhFcFQ0eV7SX6P0GyufSohQsPRmUK0~TSAKCrdOTJxffHziK6IRPW-ChTDZbJ9~OMgcAWzDngzz9bQA3qBv91x3ZS5JOLz-aqSw9iQZUAXBBMJk68Qx8mfj4~f~WoQie1NLE9yzUklnLVZwCQiJS7Bwskj2cKn0DoXOrKueBQt5qTTFvrcaRA-66KPubrIP-Tgpj5EE4z07GA3K22u5QYZD0ZsB3RhwRDii8e14Wnl2OrTw__',
  },
  {
    id: '5',
    name: 'Shirt',
    brand: 'Topshop',
    price: '51$',
    image:
      'https://s3-alpha-sig.figma.com/img/f3e5/6877/4c7febc96d7bcbc94151195223b06a90?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hPDe~vDVGp-Ui0I-zD8Pq8tgjinM7x1slB3TSV-vZQRUaJkIyv7xjqvnZvtxKDYEXJmgdbV1Pm1M8EEqrGQ1s5aat7GVGlqnLKpMTpeS31OgTGTm--pirggqTle46~FMIimOZqma1rWEAYlTXCUnFbnNufyM1-qv7jwcEoPuH-G~S0Gtbr5KV9az2vYW3JbYo51wb6WXIbmPPyfgycoYvdy7DTHeLG7krFhtgjkRFPbsXkCa2At3~LdEG-qOxOpdg~LvFEpKSoisaLSNMap8K1jdyBZCH0APrvI-F1ZmoDEgqWC0TmE5DsPrqNOfbi6o32GhGHdPBDKv59l2IHuN~A__',
  },

];

const WomenTopsScreen = ({navigation}) => {
  const [favorites, setFavorites] = useState({});
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState('Sort By');


  const toggleFavorite = id => {
    setFavorites(prev => ({...prev, [id]: !prev[id]}));
  };

  const renderStars = rating => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row'}}>
      {[...Array(5)].map((_, i) => (
        <Icon
          key={i}
          name={i < rating ? 'star' : 'star-outline'}
          size={16}
          color="#FFD700"
        />
      ))}
    </View>
  );

  const renderProduct = ({item}) => (
    <View style={styles.card} >
      <Image source={{uri: item.image}} style={styles.productImage} onPress={() => navigation.navigate('ProductCardScreen')}/>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductCardScreen')}>
        <View style={styles.productDetails}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productBrand}>{item.brand}</Text>
          {renderStars(item.rating)}
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.favoriteIcon}>
        <TouchableOpacity
          style={styles.Icon}
          onPress={() => toggleFavorite(item.id)}>
          <AntDesign
            name="heart"
            size={20}
            color={favorites[item.id] ? 'red' : 'grey'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.upperTab}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerTitle}>Women's tops</Text>

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

        <View style={styles.filterSortContainer}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation.navigate('FilterScreen')}>
            <Icon name="filter-outline" size={18} />
            <Text>Filters</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sortButton} onPress={() => setBottomSheetVisible(true)} >
            <Text>{selectedSortBy}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => navigation.navigate('GridWomenTops')}>
            <Icon name="grid-sharp" size={18} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        style={styles.productList}
      />
      <SortByBottomSheetComponent
        visible={isBottomSheetVisible}
        onClose={() => setBottomSheetVisible(false)}
        onSelectSortBy={(SortBy) => setSelectedSortBy(SortBy)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    color: '#222222',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 14,
    color: '#222222',
    backgroundColor: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#222222',
    borderRadius: 25,
    marginRight: 10,
    // marginLeft:4,
    elevation: 1,
    // marginBottom: 3,
    // marginTop:0,
  },

  tabText: {
    color: '#fff',
    fontSize: 12,
  },
  filterSortContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    margin: 8,
    marginBottom: 12,
    borderRadius: 20,
    backgroundColor: '#f9f9f9',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortButton: {},
  productList: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 2,
  },
  productImage: {
    width: 90,
    height: 90,
    marginRight: 16,
    marginBottom: 0,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  productBrand: {
    fontSize: 12,
    color: 'grey',
  },
  productPrice: {
    fontSize: 14,
    color: 'black',
  },
  favoriteIcon: {
    padding: 8,
    top: 30,
    right: -85,
    backgroundColor: '#fff',
    borderRadius: 60,
  },
  Icon: {
    top: 55,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
};

export default WomenTopsScreen;
