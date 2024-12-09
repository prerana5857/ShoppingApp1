import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const categories = [
  'Tops', 'Shirts & Blouses', 'Cardigans & Sweaters', 'Knitwear', 'Blazers',
  'Outerwear', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Dresses',
];

const CategoryDetailPage = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Categories</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Scrollable List of Categories */}
      <ScrollView>
        <TouchableOpacity style={styles.buttonAllItems}>
          <Text style={styles.buttonText}>VIEW ALL ITEMS</Text>
        </TouchableOpacity>
        <Text style={styles.chooseCategory}>Choose category</Text>
        <View style={styles.categoryList}>
          {categories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryItem} onPress={() => navigation.navigate('WomenTops')}>
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 90,
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  searchButton: {
    position: 'absolute',
    right: 16,
  },
  buttonAllItems: {
    backgroundColor: '#DB3022',
    padding: 12,
    margin: 16,
    borderRadius: 35,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseCategory: {
    marginLeft: 15,
  },
  categoryList: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginLeft: 20,
  },
  categoryText: {
    fontSize: 16,
    color: '#222',
  },
});

export default CategoryDetailPage;
