import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import COLORS from '../constants/colors';

const ButtonOutlined = (props) => {
  return (
    <Button
      {...props}
      title={props.title}
      onPress={props.onPressHandler}
      type='outline'
      containerStyle={styles.containerStyle}
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    // width: '100%',
  },
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
  buttonStyle: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: COLORS.light,
  },
});

export default ButtonOutlined;
