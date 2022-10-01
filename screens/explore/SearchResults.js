import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';

const RECENT_SEARCHES = [
  'Nike Air Max 270 React ENG',
  'Nike Air Vapormax 360',
  'Nike Air Max 270 React ENG',
  'Nike Air Max 270 React',
  'Nike Air Vapormax 360 Flyknit 3',
  'Nike Air Max React ENG',
  'Nike Air Max React ENG',
];

const SearchResults = (props) => {
  const { navigation } = props;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props) => (
        <View style={styles.header}>
          <View
            style={{
              width: '85%',
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
              width: '15%',
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
          </View>
        </View>
      ),
      headerBackVisible: false,
    });
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.bodyTextGrey}>Search Results</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingRight: 10,
  },
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    padding: 15,
  },
  bodyTextGrey: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default SearchResults;
