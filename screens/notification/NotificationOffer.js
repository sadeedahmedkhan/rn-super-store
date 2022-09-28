import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { ListItem, Icon } from '@rneui/themed';
import COLORS from '../../constants/colors';

const offers = [
  {
    title: 'The Best Title',
    subtitle:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: 'April 30, 2014 1:01 PM',
  },
  {
    title: 'SUMMER BEST OFFER 98% Cashback',
    subtitle:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    date: 'April 30, 2014 1:01 PM',
  },
  {
    title: 'Special Offer 25% OFF',
    subtitle:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: 'April 30, 2014 1:01 PM',
  },
];

const NotificationOffer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <ListItem
            containerStyle={{
              alignItems: 'flex-start',
            }}
          >
            <Icon name='tagso' type='ant-design' color={COLORS.blue} />
            <ListItem.Content>
              <ListItem.Title style={[styles.h5dark, { marginBottom: 10 }]}>
                {item.title}
              </ListItem.Title>
              <ListItem.Subtitle
                style={[styles.bodyText, { marginBottom: 10 }]}
              >
                {item.subtitle}
              </ListItem.Subtitle>
              <Text style={styles.caption}>{item.date}</Text>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: COLORS.white,
  },
  h5dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.dark,
  },
  bodyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
  caption: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: COLORS.dark,
  },
});

export default NotificationOffer;
