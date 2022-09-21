import React, { useEffect } from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';
import { Button, Icon, Image } from '@rneui/themed';
import InputField from '../../components/InputField';
import { FlatListSlider } from 'react-native-flatlist-slider';
import COLORS from '../../constants/colors';

const images = [
  {
    banner: require('../../assets/images/offer-banner.png'),
    desc: 'First image',
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
    desc: 'Second image',
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
  },
  {
    banner: require('../../assets/images/offer-banner.png'),
  },
];

const HomeFeed = (props) => {
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
              // backgroundColor: 'red',
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
            />
          </View>
        </View>
      ),
    });
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={{
          height: 250,
          // backgroundColor: 'pink',
          width: '90%',
          marginTop: 10,
          borderRadius: 5,
        }}
      >
        <FlatListSlider
          data={images}
          imageKey={'banner'}
          width={343}
          height={206}
          separatorWidth={15}
          local
          loop={false}
          autoscroll={false}
          indicatorActiveColor={COLORS.blue}
          indicatorInActiveColor={COLORS.grey}
        />

        {/* <FlatList
          data={[, , , , ,]}
          renderItem={({ item }) => (
            <Image
              source={require('../../assets/images/offer-banner.png')}
              containerStyle={{
                aspectRatio: 1,
                height: 206,
                width: 343,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        /> */}
      </View>
      <View
        style={{
          height: 200,
          backgroundColor: 'grey',
          width: '90%',
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          height: 200,
          backgroundColor: 'lightblue',
          width: '90%',
          marginTop: 10,
        }}
      ></View>
      <View
        style={{
          height: 200,
          backgroundColor: 'lightgreen',
          width: '90%',
          marginTop: 10,
        }}
      ></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default HomeFeed;
