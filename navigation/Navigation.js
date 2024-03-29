import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import LoginScreen from './../screens/auth/LoginScreen';
import RegisterScreen from './../screens/auth/RegisterScreen';
import HomeFeed from './../screens/feed/HomeFeed';
import Explore from './../screens/explore/Explore';
import SuperFlashSale from '../screens/feed/SuperFlashSale';
import SearchResults from '../screens/explore/SearchResults';
import Cart from '../screens/cart/Cart';
import Offer from './../screens/offer/Offer';
import Account from '../screens/account/Account';
import COLORS from '../constants/colors';
import ProductDetail from './../screens/product/ProductDetail';
import ProductReviews from './../screens/product/ProductReviews';
import AddReview from './../screens/product/AddReview';
import Notifications from './../screens/notification/Notifications';
import NotificationOffer from './../screens/notification/NotificationOffer';
import NotificationFeed from './../screens/notification/NotificationFeed';
import NotificationActivity from './../screens/notification/NotificationActivity';
import ShipTo from './../screens/cart/ShipTo';
import PaymentMethod from './../screens/cart/PaymentMethod';
import ChooseCard from './../screens/cart/ChooseCard';
import PaymentSuccess from './../screens/cart/PaymentSuccess';
import Profile from './../screens/account/Profile';

const StackNavigator = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen
          name='loginScreen'
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarVisible: false,
          }}
        />
        <StackNavigator.Screen
          name='registerScreen'
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <StackNavigator.Screen
          name='homeFeed'
          component={BottomTabNavigation}
          options={{
            headerBackVisible: false,
            headerShown: false,
          }}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Explore':
              iconName = 'search1';
              break;
            case 'Cart':
              iconName = 'shoppingcart';
              break;
            case 'Offer':
              iconName = 'tagso';
              break;
            case 'Account':
              iconName = 'user';
              break;
            default:
              iconName = 'info';
          }
          return (
            <Icon
              name={iconName}
              size={28}
              color={focused ? COLORS.blue : COLORS.grey}
              type='ant-design'
            />
          );
        },
        tabBarActiveTintColor: COLORS.blue,
        tabBarInactiveTintColor: COLORS.grey,
        headerShown: true,
        tabBarStyle: { height: 70, paddingBottom: 15 },
      })}
    >
      <BottomTabNavigator.Screen
        name='Home'
        component={HomeFeedStackNavigation}
        options={{
          headerStyle: {
            borderBottomColor: COLORS.light,
            borderBottomWidth: 1,
            height: 100,
          },
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name='Explore'
        component={ExploreStackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name='Cart'
        component={CartStackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name='Offer'
        component={OfferStackNavigation}
        options={{
          headerShown: false,
        }}
      />
      <BottomTabNavigator.Screen
        name='Account'
        component={AccountStackNavigation}
        options={{
          headerShown: false,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

//*****creating individual stack navigators for every tab *****//

const HomeFeedStackNavigator = createNativeStackNavigator();

const HomeFeedStackNavigation = () => {
  return (
    <HomeFeedStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 16,
          color: COLORS.dark,
        },
      }}
    >
      <HomeFeedStackNavigator.Screen name='home' component={HomeFeed} />
      <HomeFeedStackNavigator.Screen
        name='sale'
        component={SuperFlashSale}
        options={{
          headerTitle: 'Super Flash Sale',
        }}
      />
      <HomeFeedStackNavigator.Screen
        name='ProductDetail'
        component={ProductDetail}
        options={
          {
            // headerTitle: 'Super Flash Sale',
          }
        }
      />
      <HomeFeedStackNavigator.Screen
        name='ProductReviews'
        component={ProductReviews}
      />
      <HomeFeedStackNavigator.Screen
        name='AddReview'
        component={AddReview}
        options={{
          headerTitle: 'Write Review',
        }}
      />
      <HomeFeedStackNavigator.Screen
        name='Notifications'
        component={Notifications}
        options={{
          headerTitle: 'Notifications',
        }}
      />
      <HomeFeedStackNavigator.Screen
        name='NotificationOffer'
        component={NotificationOffer}
        options={{
          headerTitle: 'Offer',
        }}
      />
      <HomeFeedStackNavigator.Screen
        name='NotificationFeed'
        component={NotificationFeed}
        options={{
          headerTitle: 'Feed',
        }}
      />
      <HomeFeedStackNavigator.Screen
        name='NotificationActivity'
        component={NotificationActivity}
        options={{
          headerTitle: 'Activity',
        }}
      />
    </HomeFeedStackNavigator.Navigator>
  );
};

const ExploreStackNavigator = createNativeStackNavigator();

const ExploreStackNavigation = () => {
  return (
    <ExploreStackNavigator.Navigator>
      <ExploreStackNavigator.Screen
        name='exploreFeed'
        component={Explore}
        options={{
          headerTitle: '',
        }}
      />
      <ExploreStackNavigator.Screen
        name='searchResults'
        component={SearchResults}
        options={{
          headerTitle: '',
        }}
      />
    </ExploreStackNavigator.Navigator>
  );
};

const CartStackNavigator = createNativeStackNavigator();

const CartStackNavigation = () => {
  return (
    <CartStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 16,
          color: COLORS.dark,
        },
        // contentStyle: {
        //   height: 200,
        // },
      }}
    >
      <CartStackNavigator.Screen
        name='cartScreen'
        component={Cart}
        options={{
          headerTitle: 'Your Cart',
        }}
      />
      <CartStackNavigator.Screen
        name='shipTo'
        component={ShipTo}
        options={{
          headerTitle: 'Ship To',
        }}
      />
      <CartStackNavigator.Screen
        name='paymentMethod'
        component={PaymentMethod}
        options={{
          headerTitle: 'Payment',
        }}
      />
      <CartStackNavigator.Screen
        name='chooseCard'
        component={ChooseCard}
        options={{
          headerTitle: 'Choose Card',
        }}
      />
      <CartStackNavigator.Screen
        name='paymentSuccess'
        component={PaymentSuccess}
        options={{
          headerShown: false,
        }}
      />
    </CartStackNavigator.Navigator>
  );
};

const OfferStackNavigator = createNativeStackNavigator();

const OfferStackNavigation = () => {
  return (
    <OfferStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 16,
          color: COLORS.dark,
        },
      }}
    >
      <OfferStackNavigator.Screen
        name='offerScreen'
        component={Offer}
        options={{
          headerTitle: 'Offer',
        }}
      />
    </OfferStackNavigator.Navigator>
  );
};

const AccountStackNavigator = createNativeStackNavigator();

const AccountStackNavigation = () => {
  return (
    <AccountStackNavigator.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 16,
          color: COLORS.dark,
        },
      }}
    >
      <AccountStackNavigator.Screen
        name='AccountScreen'
        component={Account}
        options={{
          headerTitle: 'Account',
        }}
      />
      <AccountStackNavigator.Screen
        name='profile'
        component={Profile}
        options={{
          headerTitle: 'Profile',
        }}
      />
    </AccountStackNavigator.Navigator>
  );
};

export default StackNavigation;

//////////////////////////
// const AuthStackNavigation = () => {
//   return (
//     <NavigationContainer>
//       <StackNavigator.Navigator
//         screenOptions={
//           {
//             // headerShadowVisible: false,
//           }
//         }
//       >
//         <StackNavigator.Screen
//           name='loginScreen'
//           component={LoginScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//         <StackNavigator.Screen
//           name='registerScreen'
//           component={RegisterScreen}
//           options={{
//             headerShown: false,
//           }}
//         />
//       </StackNavigator.Navigator>
//     </NavigationContainer>
//   );
// };
