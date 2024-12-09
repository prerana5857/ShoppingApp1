// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MainCategoryPage from '../Shop/Categories/MainCategoryPage';
// import HomeScreen from '../HomeTab/HomeScreen';
// import Wishlist from '../Favorites/WishList';
// import BagScreen from '../Cart/MyBag';
// import ProfileScreen from '../Cart/ProfileScreen';

// const Tab = createBottomTabNavigator();


// const getTabBarIcon = (routeName, color, size) => {
//   let iconName;
//   switch (routeName) {
//     case 'Home':
//       iconName = 'home';
//       break;
//     case 'Shop':
//       iconName = 'cart-outline';
//       break;
//     case 'Bag':
//       iconName = 'shopping';
//       break;
//     case 'Favorites':
//       iconName = 'heart-outline';
//       break;
//     case 'Profile':
//       iconName = 'account-outline';
//       break;
//     default:
//       iconName = 'circle';
//   }
//   return <Icon name={iconName} size={size} color={color} />;
// };


// function MainTabNavigator() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
//         tabBarActiveTintColor: '#DB3022',
//         tabBarInactiveTintColor: '#9B9B9B',
//         headerShown: false,
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Shop" component={MainCategoryPage} />
//       <Tab.Screen name="Bag" component={BagScreen} />
//       <Tab.Screen name="Favorites" component={Wishlist} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// }

// export default MainTabNavigator;



import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainCategoryPage from '../Shop/Categories/MainCategoryPage';
import HomeScreen from '../HomeTab/HomeScreen';
import ProfileScreen from '../Cart/ProfileScreen';
import FashionSaleScreen from '../HomeTab/FashionSaleScreen';
import CategoryDetailPage from '../Categories/CategoryDetailPage';
import WomenTopsScreen from '../Shop/Categories/WomenTopsScreen';
import GridWomenTops from '../Shop/Categories/GridWomenTopsScreen';
import GridWishList from './../Favorites/GridWishList';
import Wishlist from './../Favorites/WishList';
import BagScreen from './../Cart/MyBag';
import MyOrders from '../Cart/MyOrders';
import OrderDetails from './../Cart/OrderDetails';

const HomeStack = createStackNavigator();
const ShopStack = createStackNavigator();
const WishlistStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="MainApp" component={HomeScreen} />
    <HomeStack.Screen name="FashionSale" component={FashionSaleScreen} />
  </HomeStack.Navigator>
);

const ShopStackNavigator = () => (
  <ShopStack.Navigator screenOptions={{ headerShown: false }}>
    <ShopStack.Screen name="Shop" component={MainCategoryPage} />
    <ShopStack.Screen name="CategoryDetail" component={CategoryDetailPage} />
    <ShopStack.Screen name="WomenTops" component={WomenTopsScreen} />
    <ShopStack.Screen name="GridWomenTops" component={GridWomenTops} />
  </ShopStack.Navigator>
);
const WishlistStackNavigator = () => (
  <WishlistStack.Navigator screenOptions={{ headerShown: false }}>
    <WishlistStack.Screen name="Wishlist" component={Wishlist} />
    <WishlistStack.Screen name="GridWishList" component={GridWishList} />
  </WishlistStack.Navigator>
);
const ProfileStackNavigator = () => (
  <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="MyOrders" component={MyOrders} />
    <ProfileStack.Screen name="OrderDetails" component={OrderDetails} />
  </ProfileStack.Navigator>
);


const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName, color, size) => {
  let iconName;
  switch (routeName) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Shop':
      iconName = 'cart-outline';
      break;
    case 'Bag':
      iconName = 'shopping';
      break;
    case 'Favorites':
      iconName = 'heart-outline';
      break;
    case 'Profile':
      iconName = 'account-outline';
      break;
    default:
      iconName = 'circle';
  }
  return <Icon name={iconName} size={size} color={color} />;
};

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarActiveTintColor: '#DB3022',
        tabBarInactiveTintColor: '#9B9B9B',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Shop" component={ShopStackNavigator} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Favorites" component={WishlistStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
