import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import ButtonPrimary from '../components/ButtonPrimary';
import COLORS from '../constants/colors';

const AddressItem = (props) => {
  return (
    <View
      style={[
        styles.container,
        { borderColor: props.selected ? COLORS.blue : COLORS.light },
      ]}
    >
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.h5Dark}>{props.name}</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.bodyNormalGrey}>{props.address}</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={styles.bodyNormalGrey}>{props.phone}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View style={{ width: '25%', marginRight: 25 }}>
          <ButtonPrimary title={'Edit'} />
        </View>
        <View style={{ width: '75%', alignItems: 'flex-start' }}>
          <Icon name='trash' type='feather' color={COLORS.grey} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.blue,
    padding: 20,
  },
  h5Dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.dark,
  },
  bodyNormalGrey: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default AddressItem;
