import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from '@rneui/themed';
import COLORS from '../constants/colors';

const InputField = (props) => {
  return (
    <Input
      {...props}
      placeholder={props.placeholderText}
      inputStyle={[styles.input, { ...props.inputStyle }]}
      inputContainerStyle={[styles.inputContainer, { ...props.containerStyle }]}
      leftIcon={props.leftIcon ? { ...props.leftIcon } : null}
      rightIcon={props.rightIcon ? { ...props.rightIcon } : null}
      autoFocus={props.autoFocus}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.light,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
    paddingLeft: 10,
  },
});

export default InputField;
