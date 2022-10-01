import React, { useEffect, useRef } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Button, Icon } from '@rneui/themed';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';

const RECENT_SEARCHES = [
  'Nike Air Max 270 React ENG',
  'Nike Air Vapormax 360',
  'Nike Air Max 270 React ENG',
  'Nike Air Max 270 React',
  'Nike Air Vapormax 360 Flyknit 3',
  'Nike Air Max 97 Utility',
  'Nike Air Max React ENG',
];

const SearchResults = (props) => {
  const { navigation } = props;

  const searchInputRef = useRef();

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
              autoFocus={true}
              onPressIn={() => navigation.navigate('searchResults')}
              ref={searchInputRef}
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
              icon={<Icon name='mic' type='feather' color={COLORS.grey} />}
              type='clear'
            />
          </View>
        </View>
      ),
      headerBackVisible: false,
    });
  }, []);

  // useFocusEffect(() => {
  //   searchInputRef.focus();
  // });

  return (
    <FlatList
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <Text style={styles.bodyTextGrey}>Search Results</Text>
          <Text style={styles.bodyTextBlue}>Clear All</Text>
        </View>
      }
      data={RECENT_SEARCHES}
      renderItem={({ item }) => (
        <View style={{ marginVertical: 20 }}>
          <Text style={styles.bodyTextGrey}>{item}</Text>
        </View>
      )}
    />
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
  bodyTextBlue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: COLORS.blue,
  },
});

export default SearchResults;
