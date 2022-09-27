import React, { useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import ReviewItem from '../../components/ReviewItem';
import ButtonPrimary from '../../components/ButtonPrimary';
import COLORS from '../../constants/colors';

const filters = [1, 2, 3, 4, 5];

const productReviews = [
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
  {
    name: 'Laura Octavian',
    picture: require('../../assets/images/review/laura.png'),
    rated: 4,
    review:
      'This is really amazing product, i like the design of product, I hope can buy it again!',
    productPhotos: [],
    date: 'December 10, 2016',
  },
  {
    name: 'Jhonson Bridge',
    picture: require('../../assets/images/review/jhon.png'),
    rated: 5,
    review:
      'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit',
    productPhotos: [],
    date: 'December 10, 2016',
  },
  {
    name: 'Griffin Rod',
    picture: require('../../assets/images/review/rod.png'),
    rated: 5,
    review:
      'air max are always very comfortable fit, clean and just perfect in every way. just the box was too small  ',
    productPhotos: [
      require('../../assets/images/review/Product-Picture02.png'),
      require('../../assets/images/review/Product-Picture03.png'),
    ],
    date: 'December 10, 2016',
  },
];

const ProductReviews = (props) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${productReviews.length} Reviews`,
    });
  });

  const { navigation } = props;
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={productReviews}
      renderItem={({ item }) => (
        <View style={{ marginTop: 20 }}>
          <ReviewItem {...item} />
        </View>
      )}
      ListHeaderComponent={
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              type='outline'
              title={'All Reviews'}
              containerStyle={{ marginRight: 10 }}
              buttonStyle={{
                // width: 62,
                height: 40,
                backgroundColor: 'rgba(64, 191, 255, .1)',
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
              titleStyle={{
                fontFamily: 'Poppins-Bold',
                fontSize: 12,
                color: COLORS.blue,
              }}
            />
            {filters.map((item) => (
              <Button
                type='outline'
                title={
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                      width: '100%',
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Icon name='star' color={COLORS.yellow} size={15} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontFamily: 'Poppins-Regular',
                          fontSize: 12,
                          color: COLORS.grey,
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  </View>
                }
                containerStyle={{
                  marginRight: 10,
                  borderRadius: 5,
                }}
                buttonStyle={{
                  width: 62,
                  height: 40,
                }}
                key={item}
                titleStyle={{}}
                iconPosition='left'
              />
            ))}
          </ScrollView>
        </View>
      }
      ListFooterComponent={
        <ButtonPrimary
          title='Write Review'
          onPressHandler={() => {
            navigation.navigate('AddReview');
          }}
        />
      }
      ListFooterComponentStyle={{ marginTop: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default ProductReviews;
