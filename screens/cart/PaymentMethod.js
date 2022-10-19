import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import COLORS from '../../constants/colors';

const paymentMethods = [
  {
    icon: {
      name: 'credit-card',
      type: 'feather',
    },
    method: 'Credit Card or Debit',
  },
  {
    icon: {
      name: 'paypal',
      type: 'entypo',
    },
    method: 'Paypal',
  },
  {
    icon: {
      name: 'bank-outline',
      type: 'material-community',
    },
    method: 'Bank Transfer',
  },
];

const PaymentMethod = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      {paymentMethods.map((item, index) => (
        <ListItem
          key={index}
          containerStyle={
            index === 0 ? { backgroundColor: COLORS.light } : null
          }
          onPress={() => {
            navigation.navigate('chooseCard');
          }}
        >
          <Icon
            name={item.icon.name}
            type={item.icon.type}
            color={COLORS.blue}
            size={20}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('chooseCard');
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.h6Dark}>
                {item.method}
              </ListItem.Title>
            </ListItem.Content>
          </TouchableOpacity>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  h6Dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: COLORS.dark,
  },
});

export default PaymentMethod;
