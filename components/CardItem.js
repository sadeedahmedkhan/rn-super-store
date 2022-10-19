import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/colors';

const CardItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.h4White}>{props.type}</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.h2White}>{props.number}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginRight: 20 }}>
          <Text style={styles.captionRegular}>CARD HOLDER</Text>
          <Text style={styles.captionBold}>{props.cardHolder}</Text>
        </View>
        <View>
          <Text style={styles.captionRegular}>EXPIRES ON</Text>
          <Text style={styles.captionBold}>{props.expiry}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    padding: 20,
  },
  h2White: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: COLORS.white,
  },
  h4White: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.white,
  },
  captionRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: COLORS.light,
  },
  captionBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
    color: COLORS.white,
  },
});

export default CardItem;
