import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { ListItem, Icon, Image } from '@rneui/themed';
import COLORS from '../constants/colors';

const NotificationItem = (props) => {
  return (
    <ListItem
      containerStyle={{
        alignItems: 'flex-start',
      }}
    >
      {props.icon ? (
        <Icon {...props.icon} />
      ) : (
        <Image
          source={props.image}
          style={{
            width: 48,
            height: 48,
            aspectRatio: 1,
            borderRadius: 5,
          }}
        />
      )}

      <ListItem.Content>
        <ListItem.Title style={[styles.h5dark, { marginBottom: 10 }]}>
          {props.title}
        </ListItem.Title>
        <ListItem.Subtitle style={[styles.bodyText, { marginBottom: 10 }]}>
          {props.subtitle}
        </ListItem.Subtitle>
        <Text style={styles.caption}>{props.date}</Text>
      </ListItem.Content>
    </ListItem>
  );
};

const styles = StyleSheet.create({
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

export default NotificationItem;
