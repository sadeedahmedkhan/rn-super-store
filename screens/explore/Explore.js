import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';
import CategoryItem from '../../components/CategoryItem';

const CATEGORIES = [
  {
    desc: 'Man Shirt',
    iconName: 'shirt-outline',
    iconType: 'ionicon',
  },
  {
    desc: 'Dress',
    iconName: 'swimsuit',
    iconType: 'fontisto',
  },
  {
    desc: 'Man Work Equipment',
    iconName: 'tool',
    iconType: 'ant-design',
  },
  {
    desc: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    desc: 'Man Shoes',
    iconName: 'shoe-formal',
    iconType: 'material-community',
  },
  {
    desc: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  // {
  //   desc: 'Man Shoes',
  //   iconName: 'shoe-formal',
  //   iconType: 'material-community',
  // },
  // {
  //   desc: 'Woman Bag',
  //   iconName: 'handbag',
  //   iconType: 'simple-line-icon',
  // },
  // {
  //   desc: 'Man Shoes',
  //   iconName: 'shoe-formal',
  //   iconType: 'material-community',
  // },
];

const Explore = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View style={styles.header}>
          <View
            style={{
              width: '75%',
              marginBottom: -10,
              marginTop: 15,
            }}
          >
            <InputField
              placeholderText='Search Product'
              leftIcon={{
                type: 'feather',
                name: 'search',
                color: COLORS.blue,
                size: 17,
              }}
              onPressIn={() => navigation.navigate('searchResults')}
              showSoftInputOnFocus={false}
            />
          </View>
          <View
            style={{
              width: '25%',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}
          >
            <Button
              icon={
                <Icon name='hearto' type='ant-design' color={COLORS.grey} />
              }
              type='clear'
            />
            <Button
              icon={<Icon name='bell' type='feather' color={COLORS.grey} />}
              type='clear'
              onPress={() => navigation.navigate('Notifications')}
            />
          </View>
        </View>
      ),
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.h5dark}>Men Fashion</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 10,
          // backgroundColor: 'lightgreen',
          width: '100%',
        }}
      >
        {CATEGORIES.map((item, index) => (
          <CategoryItem
            {...item}
            key={index}
            containerStyle={{
              marginRight: 20,
              marginBottom: 5,
            }}
          />
        ))}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.h5dark}>Women Fashion</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginVertical: 10,
          width: '100%',
        }}
      >
        {CATEGORIES.map((item, index) => (
          <CategoryItem
            {...item}
            key={index}
            containerStyle={{
              marginRight: 20,
              marginBottom: 7,
            }}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 10,
  },
  h5dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.dark,
  },
});

export default Explore;
