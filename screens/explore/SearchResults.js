import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Button, Icon, Image } from '@rneui/themed';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';
import ProductItem from '../../components/ProductItem';
import ButtonPrimary from './../../components/ButtonPrimary';

const RECENT_SEARCHES = [
  'Nike Air Max 270 React ENG',
  'Nike Air Vapormax 360',
  'Nike Air Max 270 React ENG',
  'Nike Air Max 270 React',
  'Nike Air Vapormax 360 Flyknit 3',
  'Nike Air Max 97 Utility',
  'Nike Air Max React ENG',
];

const SEARCH_RESULTS = [
  // {
  //   productName: 'FS - Nike Air Max 270 React ENG',
  //   price: 534.33,
  //   promotion: 24,
  //   image: require('../../assets/images/products/product-4.png'),
  // },
  // {
  //   productName: 'FS - QUILTED MAXI CROSS GENDER ENG',
  //   price: 534.33,
  //   promotion: 24,
  //   image: require('../../assets/images/products/product-5.png'),
  // },
  // {
  //   productName: 'FS - Nike Air Max 270 React ENG',
  //   price: 534.33,
  //   promotion: 24,
  //   image: require('../../assets/images/products/product-7.png'),
  // },
  // {
  //   productName: 'FS - Nike Air Max 270 React ENG',
  //   price: 534.33,
  //   promotion: 24,
  //   image: require('../../assets/images/products/product-8.png'),
  // },
];

const SearchResults = (props) => {
  const [search, setSearch] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState('recent');

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
              autoFocus={true}
              value={search}
              onChangeTextHandler={(text) => setSearch(text)}
              onSubmitEditingHandler={onSearchSubmit}
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
  }, [search]);

  // useFocusEffect(
  //   useCallback(() => {
  //     setSearch('');
  //     setSearchSubmitted('recent');
  //   }, [])
  // );

  const onSearchSubmit = () => {
    if (search.trim().length === 0) return setSearchSubmitted('recent');
    if (search.trim().toLowerCase().includes('nike')) {
      setSearchSubmitted('show');
    } else {
      setSearchSubmitted('empty');
    }
  };

  if (searchSubmitted === 'recent') {
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
              marginBottom: 10,
            }}
          >
            <Text style={styles.bodyTextGrey}>Recent Searches</Text>
            <Text style={styles.bodyTextBlue}>Clear All</Text>
          </View>
        }
        data={RECENT_SEARCHES}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.bodyTextGrey}>{item}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.bodyTextGrey}>
              No recent search history found
            </Text>
          </View>
        }
        numColumns={2}
      />
    );
  }

  if (searchSubmitted === 'show') {
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
              marginBottom: 10,
            }}
          >
            <Text style={styles.bodyTextGrey}>
              {SEARCH_RESULTS.length} Results
            </Text>
            <Text style={styles.bodyTextBlue}>Man Shoes</Text>
          </View>
        }
        data={SEARCH_RESULTS}
        renderItem={({ item }) => (
          <ProductItem
            {...item}
            style={{ width: 171, marginRight: 10, marginBottom: 10 }}
          />
        )}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={require('../../assets/icons/Not-Found.png')}
              style={{
                aspectRatio: 1,
                width: 72,
                height: 72,
                marginBottom: 20,
              }}
            />
            <Text style={[styles.h2dark, { marginBottom: 5 }]}>
              Product Not Found
            </Text>
            <Text style={[styles.bodyTextGrey, { marginBottom: 15 }]}>
              thank you for shopping using super store
            </Text>
            <ButtonPrimary
              title='Back to Home'
              onPressHandler={() =>
                navigation.navigate('Home', { screen: 'HomeFeed' })
              }
            />
          </View>
        }
        numColumns={2}
      />
    );
  }
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
  h2dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: COLORS.dark,
  },
});

export default SearchResults;
