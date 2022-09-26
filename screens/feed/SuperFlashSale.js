import React from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Image } from '@rneui/themed';
import COLORS from '../../constants/colors';
import ProductItem from '../../components/ProductItem';

const FLASH_SALE = [
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product.png'),
  },
  {
    productName: 'FS - QUILTED MAXI CROSS GENDER ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-5.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-3.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-8.png'),
  },
];

const SuperFlashSale = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Image
            source={require('../../assets/images/offer-banner.png')}
            style={{
              width: 343,
              height: 200,
              marginVertical: 15,
              borderRadius: 5,
            }}
          />
        }
        data={FLASH_SALE}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              marginBottom: 10,
            }}
            onPress={() => {
              navigation.navigate('ProductDetail');
            }}
          >
            <ProductItem {...item} style={{ width: 161 }} />
          </TouchableOpacity>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
});

export default SuperFlashSale;
