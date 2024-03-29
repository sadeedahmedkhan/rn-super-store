import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem, Icon, Badge } from '@rneui/themed';
import COLORS from '../../constants/colors';

const Notifications = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NotificationOffer');
        }}
      >
        <ListItem>
          <Icon name='tagso' type='ant-design' color={COLORS.blue} />
          <ListItem.Content>
            <ListItem.Title style={styles.h6dark}>Offer</ListItem.Title>
          </ListItem.Content>
          <Badge
            value={2}
            // status='error'
            textStyle={styles.captionBold}
            badgeStyle={{ backgroundColor: COLORS.red, width: 20, height: 20 }}
          />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NotificationFeed');
        }}
      >
        <ListItem>
          <Icon name='text-document' type='entypo' color={COLORS.blue} />
          <ListItem.Content>
            <ListItem.Title style={styles.h6dark}>Feed</ListItem.Title>
          </ListItem.Content>
          <Badge
            value={3}
            // status='error'
            textStyle={styles.captionBold}
            badgeStyle={{ backgroundColor: COLORS.red, width: 20, height: 20 }}
          />
        </ListItem>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NotificationActivity');
        }}
      >
        <ListItem>
          <Icon name='bell' type='feather' color={COLORS.blue} />
          <ListItem.Content>
            <ListItem.Title style={styles.h6dark}>Activity</ListItem.Title>
          </ListItem.Content>
          <Badge
            value={3}
            status='error'
            textStyle={styles.captionBold}
            badgeStyle={{
              backgroundColor: COLORS.red,
              width: 20,
              height: 20,
            }}
          />
        </ListItem>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 10,
  },
  h6dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: COLORS.dark,
  },
  captionBold: {
    fontFamily: 'Poppins-Bold',
    fontSize: 10,
  },
});

export default Notifications;
