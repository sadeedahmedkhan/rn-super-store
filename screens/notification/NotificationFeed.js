import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import NotificationItem from '../../components/NotificationItem';
import COLORS from '../../constants/colors';

const offers = [
  {
    title: 'New Product',
    subtitle: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: 'June 3, 2015 5:06 PM',
    image: require('../../assets/images/products/product-2.png'),
  },
  {
    title: 'Best Product',
    subtitle: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: 'June 3, 2015 5:06 PM',
    image: require('../../assets/images/products/product-3.png'),
  },
  {
    title: 'New Product',
    subtitle: 'Nike Air Zoom Pegasus 36 Miami - Special For your Activity',
    date: 'June 3, 2015 5:06 PM',
    image: require('../../assets/images/products/product-4.png'),
  },
];

const NotificationFeed = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <NotificationItem
            // icon={{ name: 'tagso', type: 'ant-design', color: COLORS.blue }}
            image={item.image}
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

export default NotificationFeed;
