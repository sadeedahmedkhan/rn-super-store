import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import COLORS from '../constants/colors';

const ButtonSecondary = (props) => {
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
    width: '100%',
  },
  titleStyle: { fontFamily: 'Poppins-Bold', fontSize: 12, color: COLORS.blue },
  buttonStyle: {
    height: 50,
    backgroundColor: 'rgba(64, 191, 255, .1)',
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: 'rgba(64, 191, 255, .1)',
  },
});

export default ButtonSecondary;
