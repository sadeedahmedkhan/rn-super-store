import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  VirtualizedList,
  StyleSheet,
} from 'react-native';
import { Button, Icon, Image } from '@rneui/themed';
import InputField from '../../components/InputField';
import ProductItem from '../../components/ProductItem';
import CategoryItem from '../../components/CategoryItem';
import { FlatListSlider } from 'react-native-flatlist-slider';
import COLORS from '../../constants/colors';

const images = [
  {
    banner: require('../../assets/images/offer-banner.png'),
    desc: 'First image',
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
    desc: 'Second image',
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
  },
];

const CATEGORIES = [
  {
    desc: 'Man Shirt',
    iconName: 'shirt-outline',
    iconType: 'ionicon',
  },
  {
    desc: 'Dress',
    iconName: 'swimsuit',
    iconType: 'fontisto',
  },
  {
    desc: 'Man Work Equipment',
    iconName: 'tool',
    iconType: 'ant-design',
  },
  {
    desc: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    desc: 'Man Shoes',
    iconName: 'shoe-formal',
    iconType: 'material-community',
  },
];

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
    image: require('../../assets/images/product-2.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-3.png'),
  },
];

const MEGA_SALE = [
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-4.png'),
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
    image: require('../../assets/images/product-6.png'),
  },
];

const RECOMENDED = [
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-4.png'),
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
    image: require('../../assets/images/product-7.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/product-8.png'),
  },
];

const HomeFeed = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View style={styles.header}>
          <View
            style={{
              width: '75%',
              marginBottom: -10,
              marginTop: 15,
            }}
          >
            <InputField
              placeholderText='Search Product'
              leftIcon={{
                type: 'feather',
                name: 'search',
                color: COLORS.blue,
                size: 17,
              }}
            />
          </View>
          <View
            style={{
              width: '25%',
              flexDirection: 'row',

              justifyContent: 'flex-start',
            }}
          >
            <Button
              icon={
                <Icon name='hearto' type='ant-design' color={COLORS.grey} />
              }
              type='clear'
            />
            <Button
              icon={<Icon name='bell' type='feather' color={COLORS.grey} />}
              type='clear'
            />
          </View>
        </View>
      ),
    });
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          height: 250,
          width: '90%',
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        <FlatListSlider
          data={images}
          imageKey={'banner'}
          width={343}
          height={206}
          separatorWidth={15}
          local
          loop={false}
          autoscroll={false}
          indicatorActiveColor={COLORS.blue}
          indicatorInActiveColor={COLORS.light}
        />
      </View>
      <View
        style={{
          width: '90%',
          marginTop: 10,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.dark,
            }}
          >
            Category
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.blue,
            }}
          >
            More Category
          </Text>
        </View>
        <View>
          <FlatList
            horizontal
            data={CATEGORIES}
            renderItem={({ item }) => <CategoryItem {...item} />}
            contentContainerStyle={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View
        style={{
          width: '90%',
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.dark,
            }}
          >
            Flash Sale
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.blue,
            }}
          >
            See More
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FLASH_SALE}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('sale')}
                // style={{ flex: 1, width: '100%' }}
              >
                <ProductItem
                  {...item}
                  style={{
                    width: 141,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View
        style={{
          width: '90%',
          marginTop: 20,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.dark,
            }}
          >
            Mega Sale
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.blue,
            }}
          >
            See More
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={MEGA_SALE}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('sale')}>
                <ProductItem
                  {...item}
                  style={{
                    width: 141,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <View
        style={{
          width: '90%',
          height: 206,
          marginTop: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/images/recomended-product-banner.png')}
          style={{
            aspectRatio: 1,
            width: '100%',
            borderRadius: 5,
          }}
        />
      </View>
      <View
        style={{
          // height: 200,
          // backgroundColor: 'lightgreen',
          width: '90%',
          marginTop: 15,
          flexDirection: 'row',
          flexWrap: 'wrap',
          // alignContent: 'center',
          // justifyContent: 'space-between',
        }}
      >
        {RECOMENDED.map((item, index) => (
          <View
            key={index}
            style={{
              width: '50%',
              marginBottom: 10,
              alignItems: 'center',
              // justifyContent: 'space-between',
              // backgroundColor: index % 2 === 0 ? 'red' : 'green',
              // borderColor: 'blue',
              // borderWidth: 1,
            }}
          >
            <ProductItem
              {...item}
              size='large'
              style={{
                width: 171,
              }}
            />
          </View>
        ))}
        {/* <FlatList
          data={RECOMENDED}
          numColumns={2}
          // horizontal
          renderItem={({ item }) => <ProductItem {...item} />}
          scrollEnabled={false}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 10,
  },
});

export default HomeFeed;
