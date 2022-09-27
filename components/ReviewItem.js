import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { AirbnbRating, Image } from '@rneui/base';
import COLORS from '../constants/colors';

const ReviewItem = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-start',
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
      {props.productPhotos.length > 0 && (
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
      )}

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

export default ReviewItem;
