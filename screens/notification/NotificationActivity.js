import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import NotificationItem from '../../components/NotificationItem';
import COLORS from '../../constants/colors';

const offers = [
  {
    title: 'Transaction Nike Air Zoom Product',
    subtitle:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: 'April 30, 2014 1:01 PM',
  },
  {
    title: 'Transaction Nike Air Zoom Pegasus 36 Miami',
    subtitle:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor',
    date: 'April 30, 2014 1:01 PM',
  },
  {
    title: 'Transaction Nike Air Max',
    subtitle:
      'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    date: 'April 30, 2014 1:01 PM',
  },
];

const NotificationActivity = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <NotificationItem
            icon={{ name: 'swap', type: 'ant-design', color: COLORS.blue }}
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
    padding: 15,
    backgroundColor: COLORS.white,
  },
});

export default NotificationActivity;
