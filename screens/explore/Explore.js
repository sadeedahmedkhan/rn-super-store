import React from 'react';
import { View, Text } from 'react-native';

const Explore = (props) => {
  return (
    <View>
      <Text
        onPress={() => {
          props.navigation.navigate('searchResults');
        }}
      >
        Explore
      </Text>
    </View>
  );
};

export default Explore;
