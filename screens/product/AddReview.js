import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AirbnbRating, Button, Image } from '@rneui/base';
import * as ImagePicker from 'expo-image-picker';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';
import COLORS from '../../constants/colors';

const AddReview = (props) => {
  const [rating, setRating] = useState(4);
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
    });

    if (!result.cancelled) {
      setImages([...images, result.uri]);
    }
  };

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
      <View style={{ marginTop: 10, flexDirection: 'row' }}>
        {images.length >= 1 &&
          images.map((item, index) => (
            <Image
              key={index}
              source={{ uri: item }}
              style={{
                width: 72,
                height: 72,
                aspectRatio: 1,
                borderRadius: 5,
                marginRight: 10,
              }}
            />
          ))}
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
          onPress={pickImage}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <ButtonPrimary title='Add Review' onPressHandler={() => {}} />
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
