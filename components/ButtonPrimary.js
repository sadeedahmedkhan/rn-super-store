import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import COLORS from '../constants/colors';

const ButtonPrimary = (props) => {
  return (
    <Button
      {...props}
      title={props.title}
      onPress={props.onPressHandler}
      containerStyle={styles.containerStyle}
      titleStyle={styles.titleStyle}
      buttonStyle={styles.buttonStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '86%',
    borderRadius: 5,
  },
  titleStyle: { fontFamily: 'Poppins-Bold', fontSize: 14 },
  buttonStyle: { paddingVertical: 15, backgroundColor: COLORS.blue },
});

export default ButtonPrimary;