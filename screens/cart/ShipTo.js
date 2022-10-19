import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Icon, Button } from '@rneui/themed';
import COLORS from '../../constants/colors';
import ButtonPrimary from './../../components/ButtonPrimary';
import AddressItem from './../../components/AddressItem';

const addresses = [
  {
    name: 'Priscekila',
    address:
      '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    phone: '+99 1234567890',
  },
  {
    name: 'Ahmad Khaidir',
    address:
      '3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States',
    phone: '+99 1234567890',
  },
];

const ShipTo = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Icon name='add' type='ionicon' color={COLORS.blue} />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 15, flexGrow: 1 }}>
        {addresses.map((item, index) => (
          <View key={index} style={{ marginBottom: 15 }}>
            <AddressItem {...item} selected={index === 0 ? true : false} />
          </View>
        ))}
        <View>
          <ButtonPrimary title='Next' />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
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

export default ShipTo;
