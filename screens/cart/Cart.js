import React, { useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import COLORS from '../../constants/colors';
import CartItem from '../../components/CartItem';
import InputField from './../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';

const cartItems = [
  {
    image: require('../../assets/images/products/product.png'),
    title: 'Nike Air Zoom Pegasus 36 Miami',
    fav: true,
    price: 299.43,
    qty: 1,
  },
  {
    image: require('../../assets/images/products/product-2.png'),
    title: 'Nike Air Zoom Pegasus 36 Miami',
    fav: false,
    price: 249.5,
    qty: 1,
  },
  {
    image: require('../../assets/images/products/product-3.png'),
    title: 'Nike Air Zoom Pegasus 36 Miami',
    fav: false,
    price: 249.5,
    qty: 1,
  },
];

const Cart = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 15 }}>
        {cartItems.map((item, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <CartItem {...item} />
          </View>
        ))}
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder='Enter Coupon Code'
            style={{
              borderWidth: 0.5,
              borderColor: COLORS.light,
              height: 56,
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              width: '75%',
              paddingHorizontal: 10,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}
            placeholderTextColor={COLORS.grey}
          />
          <Button
            title='Apply'
            titleStyle={{ fontFamily: 'Poppins-Bold', fontSize: 14 }}
            buttonStyle={{ paddingVertical: 15, backgroundColor: COLORS.blue }}
            containerStyle={{
              width: '25%',
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              height: 56,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 15,
            padding: 15,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.light,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}
          >
            <Text style={styles.bodyNormalGrey}>Items (3)</Text>
            <Text style={styles.bodyNormalDark}>$598.86</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}
          >
            <Text style={styles.bodyNormalGrey}>Shipping</Text>
            <Text style={styles.bodyNormalDark}>$40.00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}
          >
            <Text style={styles.bodyNormalGrey}>Import Charges</Text>
            <Text style={styles.bodyNormalDark}>$128.00</Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: COLORS.light,
              borderStyle: 'dashed',
              marginBottom: 15,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={styles.h6Dark}>Total Price</Text>
            <Text style={styles.h6Blue}>$766.86</Text>
          </View>
        </View>
        <ButtonPrimary
          title='Check Out'
          onPressHandler={() => {
            navigation.navigate('shipTo');
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  h6Dark: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: COLORS.dark,
  },
  h6Blue: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: COLORS.blue,
  },
  bodyNormalGrey: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: COLORS.grey,
  },
  bodyNormalDark: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: COLORS.dark,
  },
});

export default Cart;
