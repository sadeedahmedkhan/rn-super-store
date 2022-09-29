import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import COLORS from '../constants/colors';

const CategoryItem = (props) => {
  return (
    <View style={[styles.container, { ...props.containerStyle }]}>
      <View style={styles.iconContainer}>
        <Icon name={props.iconName} type={props.iconType} color={COLORS.blue} />
      </View>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10,
  },
  iconContainer: {
    borderRadius: 100,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: COLORS.light,
    justifyContent: 'center',
  },
  desc: {
    marginTop: 8,
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: COLORS.grey,
  },
});

export default CategoryItem;
