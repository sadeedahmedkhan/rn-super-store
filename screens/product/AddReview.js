import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating, Button, Image } from '@rneui/base';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';

const AddReview = (props) => {
  const [rating, setRating] = useState(4);

  return (
    <View style={styles.container}>
      <Text style={styles.h5dark}>
        Please write Overall level of satisfaction with your shipping / Delivery
        Service
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '60%',
          marginTop: 15,
        }}
      >
        <AirbnbRating
          showRating={false}
          size={20}
          ratingContainerStyle={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
          defaultRating={rating}
          onFinishRating={setRating}
          selectedColor={COLORS.yellow}
        />
        <Text style={styles.h5grey}>{rating}/5</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.h5dark}>Write Your Review</Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <InputField
          placeholderText='Write your review here'
          multiline
          numberOfLines={5}
          inputStyle={{
            height: 160,
            textAlignVertical: 'top',
            paddingTop: 15,
          }}
          // containerStyle={{
          //   height: 200,
          // }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.h5dark}>Add Photo</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Button
          icon={{
            name: 'add',
            color: COLORS.grey,
          }}
          type='outline'
          buttonStyle={{
            width: 72,
            height: 72,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  h5dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.dark,
  },
  h5grey: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.grey,
  },
});

export default AddReview;
