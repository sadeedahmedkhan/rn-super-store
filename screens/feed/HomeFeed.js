import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';

const HomeFeed = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View style={styles.header}>
          <View
            style={{
              width: '70%',
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
              width: '30%',
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
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
