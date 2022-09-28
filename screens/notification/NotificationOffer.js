import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import NotificationItem from '../../components/NotificationItem';
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

const NotificationOffer = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <NotificationItem
            icon={{ name: 'tagso', type: 'ant-design', color: COLORS.blue }}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: COLORS.white,
  },
});

export default NotificationOffer;
