import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import COLORS from '../../constants/colors';

const accountOptions = [
  {
    icon: {
      name: 'user',
      type: 'ant-design',
    },
    option: 'Profile',
    navigate: 'profile',
  },
  {
    icon: {
      name: 'bookmark-border',
      type: 'material-design',
    },
    option: 'Order',
    navigate: 'order',
  },
  {
    icon: {
      name: 'map-pin',
      type: 'feather',
    },
    option: 'Address',
    navigate: 'address',
  },
  {
    icon: {
      name: 'credit-card',
      type: 'feather',
    },
    option: 'Payment',
    navigate: 'payment',
  },
];

const Account = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      {accountOptions.map((item, index) => (
        <ListItem
          key={index}
          containerStyle={
            index === 0 ? { backgroundColor: COLORS.light } : null
          }
          onPress={() => {
            navigation.navigate(item.navigate);
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
              navigation.navigate(item.navigate);
            }}
          >
            <ListItem.Content>
              <ListItem.Title style={styles.h6Dark}>
                {item.option}
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

export default Account;
