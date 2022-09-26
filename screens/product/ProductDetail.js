import React, { useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Image, Icon, AirbnbRating } from '@rneui/themed';
import ProductItem from '../../components/ProductItem';
import ButtonPrimary from './../../components/ButtonPrimary';
import COLORS from '../../constants/colors';

const LIKE = [
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product.png'),
  },
  {
    productName: 'FS - QUILTED MAXI CROSS GENDER ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product-2.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product-3.png'),
  },
];

const productDetails = {
  title: 'Nike Air Zoom Pegasus 36 Miami',
  availableSizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
  selectedSize: 7,
  price: 299.43,
  rating: 4,
  availableColors: Object.values(COLORS),
  selectedColor: COLORS.yellow,
  shown: `Laser\nBlue/Anthracite/Watermel\non/White`,
  style: 'CD0113-400',
  desc: 'The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.',
  images: [
    {
      product: require('../../assets/images/products/product-full.png'),
      desc: 'First image',
    },
    {
      product: require('../../assets/images/products/product-full.png'),
      desc: 'Second image',
    },
    {
      product: require('../../assets/images/products/product-full.png'),
    },
    {
      product: require('../../assets/images/products/product-full.png'),
    },
    {
      product: require('../../assets/images/products/product-full.png'),
    },
  ],
  reviews: [
    {
      name: 'James Lawson',
      picture: require('../../assets/images/review/profile-picture.png'),
      rated: 4,
      review:
        'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.',
      productPhotos: [
        require('../../assets/images/review/Product-Picture01.png'),
        require('../../assets/images/review/Product-Picture02.png'),
        require('../../assets/images/review/Product-Picture03.png'),
      ],
      date: 'December 10, 2016',
    },
  ],
  overAllRating: 4.5,
};

const ReviewItem = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-start',
          // backgroundColor: 'lightgrey',
        }}
      >
        <View style={{ width: '20%' }}>
          <Image
            source={props.picture}
            style={{ aspectRatio: 1, width: 48, height: 48 }}
          />
        </View>
        <View
          style={{
            width: '80%',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.dark,
            }}
          >
            {props.name}
          </Text>
          <AirbnbRating
            isDisabled
            defaultRating={props.rated}
            size={15}
            selectedColor={COLORS.yellow}
            showRating={false}
            starContainerStyle={{ alignSelf: 'flex-start' }}
          />
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontFamily: 'Poppins-Regular',
            fontSize: 12,
            color: COLORS.grey,
          }}
        >
          {props.review}
        </Text>
      </View>
      <View style={{ flex: 1, width: '100%', marginTop: 15 }}>
        <FlatList
          data={props.productPhotos}
          renderItem={({ item }) => {
            return (
              <Image
                source={item}
                style={{
                  width: 72,
                  height: 72,
                  aspectRatio: 1,
                  marginRight: 15,
                }}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 10,
          color: COLORS.grey,
          marginTop: 15,
        }}
      >
        {props.date}
      </Text>
    </View>
  );
};

const ProductDetail = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ flex: 1 }}>
          <View style={{ width: '50%' }}>
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 16,
                color: COLORS.dark,
              }}
            >
              {productDetails.title}
            </Text>
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
          width: '100%',
        }}
      >
        <FlatListSlider
          data={productDetails.images}
          imageKey={'product'}
          width={375}
          height={238}
          // separatorWidth={15}
          local
          loop={false}
          autoscroll={false}
          indicatorActiveColor={COLORS.blue}
          indicatorInActiveColor={COLORS.light}
        />
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 15,
          // alignItems: 'flex-start',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: '75%' }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                fontSize: 20,
                color: COLORS.dark,
              }}
              numberOfLines={2}
            >
              {productDetails.title}
            </Text>
          </View>
          <View
            style={{
              width: '25%',
              justifyContent: 'flex-start',
              paddingTop: 5,
              alignItems: 'flex-end',
            }}
          >
            <Icon name='hearto' type='ant-design' color={COLORS.grey} />
          </View>
        </View>
        <AirbnbRating
          showRating={false}
          size={15}
          defaultRating={productDetails.rating}
          isDisabled
          ratingContainerStyle={{ marginBottom: 10, alignSelf: 'flex-start' }}
          selectedColor={COLORS.yellow}
        />
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            color: COLORS.blue,
          }}
        >
          ${productDetails.price}
        </Text>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 14,
            color: COLORS.dark,
            marginTop: 20,
          }}
        >
          Select Size
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <FlatList
            data={productDetails.availableSizes}
            renderItem={({ item }) => (
              <View
                style={{
                  borderWidth: 1,
                  borderColor:
                    productDetails.selectedSize == item
                      ? COLORS.blue
                      : COLORS.light,
                  borderRadius: 50,
                  width: 50,
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 15,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'Poppins-Bold',
                    fontSize: 14,
                    color: COLORS.dark,
                  }}
                >
                  {item}
                </Text>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 14,
            color: COLORS.dark,
            marginTop: 20,
          }}
        >
          Select Color
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <FlatList
            data={productDetails.availableColors}
            renderItem={({ item }) =>
              item !== '#FFF' && (
                <View
                  style={{
                    borderWidth: productDetails.selectedColor == item ? 15 : 0,
                    backgroundColor:
                      productDetails.selectedColor == item
                        ? COLORS.white
                        : item,
                    borderColor:
                      productDetails.selectedColor == item ? item : null,
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 15,
                  }}
                ></View>
              )
            }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 14,
            color: COLORS.dark,
            marginTop: 20,
          }}
        >
          Specification
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: COLORS.dark,
            }}
          >
            Shown:
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: COLORS.grey,
            }}
          >
            {productDetails.shown}
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: COLORS.dark,
            }}
          >
            Style:
          </Text>
          <Text
            style={{
              textAlign: 'right',
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: COLORS.grey,
            }}
          >
            CD0113-400
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            // flexDirection: 'row',
            // justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 12,
              color: COLORS.grey,
            }}
            numberOfLines={5}
            ellipsizeMode='tail'
          >
            {productDetails.desc}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.dark,
              marginTop: 20,
            }}
          >
            Review Product
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.blue,
              marginTop: 20,
            }}
          >
            See More
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
          }}
        >
          <AirbnbRating
            isDisabled
            defaultRating={productDetails.overAllRating}
            size={15}
            selectedColor={COLORS.yellow}
            showRating={false}
            starContainerStyle={{ marginRight: 5 }}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
              color: COLORS.grey,
              alignSelf: 'center',
              marginRight: 5,
            }}
          >
            {productDetails.overAllRating}
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: 10,
              color: COLORS.grey,
              alignSelf: 'center',
            }}
          >
            ({productDetails.reviews.length} Review)
          </Text>
        </View>
        <ReviewItem {...productDetails.reviews[0]} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: 14,
              color: COLORS.dark,
            }}
          >
            You Might Also Like
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={LIKE}
            renderItem={({ item }) => (
              <TouchableOpacity
                // onPress={() => navigation.navigate('sale')}
                style={{ flex: 1, width: '100%' }}
              >
                <ProductItem
                  {...item}
                  style={{
                    width: 141,
                    // height: 100,
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ marginTop: 20, width: '100%', alignItems: 'center' }}>
          <ButtonPrimary title='Add To Cart' onPress={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingBottom: 20,
  },
});

export default ProductDetail;
