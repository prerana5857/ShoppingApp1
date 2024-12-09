import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const categories = [
    { id: 1, title: 'New', image: 'https://s3-alpha-sig.figma.com/img/715c/827c/e012b7c12e4b2a5bc61b8683ec894a9b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TpAvqVFiqXt473PFn1Bd00QurcB9lZSk1yx1Msp2yRGyB-FQTdUMTOZpYChYsCUABSnxmuiJhIDjcYU5wW7OAhu7pALkA6-W8U5FMsLQUQMPC5HwDKMuZmcpIfmTLmOVPLPK8BGGJ7vA~5~qJnxNR9P7eoj6PFgjZsK-rBO5LtSMj1wtwEs3ZGCWv76i3wgMNhmfiUxzP9L1HK7~FCYY1nqehFZWb3eeQI3PDArBIOq~ag~vusr0eyoD3bSg8fJIOtr2UIbi6I11H1TcrVIG5HCa15G2alDUXce~O6wDtBEb~VtNMCklNsRQJOF1WBE0PX49ThGhXLSEHYqRlXW4AQ__' },
    { id: 2, title: 'Clothes', image: 'https://s3-alpha-sig.figma.com/img/4d8c/7e9c/1e3e38ccbde0b3617e6016fb65157ec3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CNn0t-ZO3ZMo6NMLokrz8p04TJp5mKS8tR24p7Af~qhyzeF-D3hVRU6hmc3iOsi6gyxU5nVFIG9vCtkDS42~Iy6kqzC47sjcsrChuzBz-iffyAgN99kZWooQ8WWwPWdjlI6jDwd4epQsogSOpAEETmcPkYvtAjQwpmzR-AXommTqPO8cjQ02i35Z6eRbIWxXLU-WmFb91Bpxih~Ez47v8W4cM02WY41rywTgW4HwYfRtnCsb8ibIsrUwfKeXkWG3Ekl5zc6wNZZcfKvUZW0eJkd2kK9nGP9uMdCzQSvndSmXGIRv2i7cPzIEa7uI8gZvTxrm4oygtjk0EpwoxRU0Fg__' },
    { id: 3, title: 'Shoes', image: 'https://s3-alpha-sig.figma.com/img/ef74/9cf9/46b19562fcd50e353f20c0b75c070865?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R7oFQ-zAy0rGgTggqWuaQjTOyzD0HpMOwAoo79yDBQDtPWHzB32gDRiin0oEgpWULerwqLFbB7LGhf6XsyWMK3f7BRhfnXlG89uadYf9zV9Bv7UShQOgAhgQQaeESEBIvG5uxAHrV66wpGiHJRnPbAWmIIDoUtcBYDgYVwjmoCHP3yoobdGtgQ~0gpEYifK3zKkkH0FO-mQlkZsk6nXyf6TsFZaXIa4Sc0o6YmgKGwroVMdWCIyUioDNy4QBLvXQhWoMlJyXFgi5YdaVt1dsvbKsepFkEQcaVwrQtYCRfbf3OdDr9Q8xAn9HHrgy910PRfDT~3Y3Fvl5hmzDdpHNdA__' },
    { id: 4, title: 'Accesories', image: 'https://s3-alpha-sig.figma.com/img/5bfc/9b2c/577233e2c04f0024ec9ea69388017eaf?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EmO-vHqgZalmDZwGAppSIlp2UJbwcDpwhPLH8gapCmGVoy4KGQfJ8BBMsDS5wo7LCg-~3iBI~EPYPbwXAGfAZOrfWi5A0QoLysYivghPbh24hZBzQaKaFLWblU6tdIw8MvnJ3rNwoYJCv-NL~1XBoamujNA3f9zE~Zq~DQsdx2SXvzGZMnsztupvHh-HMDi2XQx8X0yxns5qj4WktcWCZvCTdUmWt7vjMV3cGzCc0BIGcDFBwMTAiW0MK5qPwqIxwF68qokYqr8uw1po2LGKVMqafN04RUh6~WH2dEMPhwaIMlDWPAYpExge1QGqD7rIHWEmbv9Sk7cBDRF7-mgqUw__' },
];

const CategoryCard = ({ title, image, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('CategoryDetail')}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Image source={{ uri: image }} style={styles.cardImage} />
    </View>
  </TouchableOpacity>
);

const MainCategoryPage = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>

      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.saleBanner}>
          <Text style={styles.saleText}>SUMMER SALES</Text>
          <Text style={styles.saleSubText}>Up to 50% off</Text>
        </TouchableOpacity>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            image={category.image}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    headerTitle: {
        fontSize: 20,
        textAlign:'center',
        marginLeft: 100,
        fontWeight: 'bold',
        color:'#222222',
    },
    backButton: {
        position: 'absolute',
        left: 16,
        color:'#222222',
    },
    searchButton: {
        position: 'absolute',
        right: 16,
        color:'#222222',
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    tabItem: {
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#DB3022',
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        padding: 16,
      },
    saleBanner: {
        backgroundColor: '#DB3022',
        height: 90,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    saleText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    saleSubText: {
        color: 'white',
        fontSize: 16,
    },
    card: {
        backgroundColor: '#f9f9f9',
        height: 100,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        marginBottom: 16,
    },
    cardImage: {
        width: 171,
        height: 100,
        marginLeft: 20,
    },
    cardTitle: {
        width: '40%',
        fontSize: 18,
        fontWeight: '600',
        color:'#222222',
    },
});

export default MainCategoryPage;
