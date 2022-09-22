import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from '@rneui/themed';
import COLORS from '../constants/colors';

const ProductItem = (props) => {
  return (
    <View style={[styles.container, { ...props.style }]}>
      <Image source={props.image} style={{ aspectRatio: 1, width: '100%' }} />
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 12,
          color: COLORS.dark,
          marginTop: 5,
        }}
        numberOfLines={2}
        ellipsizeMode={'tail'}
      >
        {props.productName}
      </Text>
      <Text
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 12,
          color: COLORS.blue,
          marginTop: 5,
        }}
      >
        ${(props.price * (props.promotion / 100)).toFixed(2)}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 10,
            color: COLORS.grey,
            textDecorationLine: 'line-through',
            // textDecorationStyle: 'solid',
          }}
        >
          ${props.price}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 10,
            color: COLORS.red,
          }}
        >
          {' '}
          {props.promotion}% Off
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.light,
    borderRadius: 5,
    padding: 20,
    width: 141,
    // marginRight: 10,
    flex: 1,
  },
});

export default ProductItem;
