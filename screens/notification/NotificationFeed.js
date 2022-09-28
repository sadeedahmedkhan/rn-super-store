import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../../constants/colors';

const NotificationFeed = () => {
  return (
    <View>
      <Text>NotificationFeed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
});

export default NotificationFeed;
