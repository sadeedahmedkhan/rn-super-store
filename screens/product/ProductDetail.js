import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';
import { Icon } from '@rneui/themed';
import COLORS from '../../constants/colors';

const images = [
  {
    product: require('../../assets/images/product-full.png'),
    desc: 'First image',
  },
  {
    product: require('../../assets/images/product-full.png'),
    desc: 'Second image',
  },
  {
    product: require('../../assets/images/product-full.png'),
  },
  {
    product: require('../../assets/images/product-full.png'),
  },
  {
    product: require('../../assets/images/product-full.png'),
  },
];

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
              Nike Air Zoom Pegasus 36 Miami
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
          data={images}
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
              Nike Air Zoom Pegasus 36 Miami
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
        <Text
          style={{
            fontFamily: 'Poppins-Bold',
            fontSize: 20,
            color: COLORS.blue,
          }}
        >
          $299.43
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});

export default ProductDetail;
