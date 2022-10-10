import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Button, Icon, Image, BottomSheet, ListItem } from '@rneui/themed';
import InputField from '../../components/InputField';
import COLORS from '../../constants/colors';
import ProductItem from '../../components/ProductItem';
import ButtonPrimary from './../../components/ButtonPrimary';
import ButtonSecondary from './../../components/ButtonSecondary';
import ButtonOutlined from './../../components/ButtonOutlined';

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
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product-4.png'),
  },
  {
    productName: 'FS - QUILTED MAXI CROSS GENDER ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product-5.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product-7.png'),
  },
  {
    productName: 'FS - Nike Air Max 270 React ENG',
    price: 534.33,
    promotion: 24,
    image: require('../../assets/images/products/product-8.png'),
  },
];

const CATEGORIES = [
  {
    title: 'Man Shirt',
    iconName: 'shirt-outline',
    iconType: 'ionicon',
  },
  {
    title: 'Dress',
    iconName: 'swimsuit',
    iconType: 'fontisto',
  },
  {
    title: 'Man Work Equipment',
    iconName: 'tool',
    iconType: 'ant-design',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Shoes',
    iconName: 'shoe-formal',
    iconType: 'material-community',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Shirt',
    iconName: 'shirt-outline',
    iconType: 'ionicon',
  },
  {
    title: 'Dress',
    iconName: 'swimsuit',
    iconType: 'fontisto',
  },
  {
    title: 'Man Work Equipment',
    iconName: 'tool',
    iconType: 'ant-design',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Shoes',
    iconName: 'shoe-formal',
    iconType: 'material-community',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Work Equipment',
    iconName: 'tool',
    iconType: 'ant-design',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Shoes',
    iconName: 'shoe-formal',
    iconType: 'material-community',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Work Equipment',
    iconName: 'tool',
    iconType: 'ant-design',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
  {
    title: 'Man Shoes',
    iconName: 'shoe-formal',
    iconType: 'material-community',
  },
  {
    title: 'Woman Bag',
    iconName: 'handbag',
    iconType: 'simple-line-icon',
  },
];

const SORT_BY = [
  'Best Match',
  'Time: Ending Soonest',
  'Time: Newly Listed',
  'Price + Shipping: Lowest First',
  'Price + Shipping: Highest First',
  'Distance: Nearest Fisrt',
];

const FILTERS = {
  condition: ['New', 'Used', 'Not Specified'],
  buyingFormat: [
    'All Listings',
    'Accept Offers',
    'Auction',
    'Buy It Now',
    'Classified Ads',
  ],
  itemLocation: ['US Only', 'North America', 'Europe', 'Asia'],
  showOnly: [
    'Free Returns',
    'Returns Accepted',
    'Authorized Seller',
    'Completed Items',
    'Sold Items',
    'Deals & Savings',
    'Sale Items',
    'Listed as Lots',
    'Search in Description',
    'Benefits Charity',
    'Authenticity Verified',
  ],
};

const SearchResults = (props) => {
  const [search, setSearch] = useState('');
  const [searchSubmitted, setSearchSubmitted] = useState('recent');
  const [isVisible, setVisible] = useState(false);
  const [isSortVisible, setSortVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);

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
              autoFocus={true}
              value={search}
              onChangeTextHandler={(text) => setSearch(text)}
              onSubmitEditingHandler={onSearchSubmit}
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
                <Icon
                  name='sort-ascending'
                  type='material-community'
                  color={COLORS.grey}
                />
              }
              type='clear'
              onPress={() => setSortVisible(true)}
            />
            <Button
              icon={
                <Icon
                  name='filter'
                  type='ant-design'
                  color={COLORS.grey}
                  onPress={() => setFilterVisible(true)}
                />
              }
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

  const CategoryBottomSheet = (props) => (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={() => {
        setVisible(false);
      }}
      modalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          flexGrow: 1,
          // height: 200,
          borderRadius: 20,
        }}
      >
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text style={styles.h4dark}>Category</Text>
        </View>
        <ScrollView
          style={{
            backgroundColor: COLORS.white,
            height: 500,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          {CATEGORIES.map((item, index) => (
            <TouchableOpacity key={index}>
              <ListItem
                containerStyle={
                  index === 4 ? { backgroundColor: COLORS.light } : null
                }
                onPress={() => {
                  setVisible(false);
                }}
              >
                <Icon
                  name={item.iconName}
                  type={item.iconType}
                  color={COLORS.blue}
                  size={20}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.bodyTextDark}>
                    {item.title}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </BottomSheet>
  );

  const SortBottomSheet = (props) => (
    <BottomSheet
      isVisible={isSortVisible}
      onBackdropPress={() => {
        setSortVisible(false);
      }}
      modalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      containerStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          flexGrow: 1,
          // height: 200,
          borderRadius: 20,
        }}
      >
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text style={styles.h4dark}>Sort By</Text>
        </View>
        <ScrollView
          style={{
            backgroundColor: COLORS.white,
            height: 500,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          {SORT_BY.map((item, index) => (
            <TouchableOpacity key={index}>
              <ListItem
                containerStyle={
                  index === 1 ? { backgroundColor: COLORS.light } : null
                }
                onPress={() => {
                  setSortVisible(false);
                }}
              >
                {/* <Icon
                  name={item.iconName}
                  type={item.iconType}
                  color={COLORS.blue}
                  size={20}
                /> */}
                <ListItem.Content>
                  <ListItem.Title style={styles.bodyTextDark}>
                    {item}
                  </ListItem.Title>
                </ListItem.Content>
              </ListItem>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </BottomSheet>
  );

  const FilterBottomSheet = (props) => (
    <BottomSheet
      isVisible={isFilterVisible}
      onBackdropPress={() => {
        setFilterVisible(false);
      }}
      modalProps={{
        animationType: 'slide',
        statusBarTranslucent: true,
      }}
      containerStyle={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
    >
      <View
        style={{
          backgroundColor: COLORS.white,
          flexGrow: 1,
          // height: 200,
          borderRadius: 20,
        }}
      >
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Text style={styles.h4dark}>Filter Search</Text>
        </View>
        <ScrollView
          style={{
            backgroundColor: COLORS.white,
            height: 500,
            flexGrow: 1,
            // padding: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.h5dark}>Price Range</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: '50%',
              }}
            >
              <InputField placeholderText='$min' />
            </View>
            <View
              style={{
                width: '50%',
              }}
            >
              <InputField placeholderText='$max' />
            </View>
          </View>
          <View style={{ paddingLeft: 15 }}>
            <Text style={styles.h5dark}> Condition </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 10,
              }}
            >
              {FILTERS.condition.map((item, index) => (
                <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                  {index !== 0 ? (
                    <ButtonSecondary title={item} />
                  ) : (
                    <ButtonOutlined title={item} />
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={{ paddingLeft: 15, marginTop: 20 }}>
            <Text style={styles.h5dark}> Buying Format </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 10,
              }}
            >
              {FILTERS.buyingFormat.map((item, index) => (
                <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                  {index === 1 ? (
                    <ButtonSecondary title={item} />
                  ) : (
                    <ButtonOutlined title={item} />
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={{ paddingLeft: 15, marginTop: 20 }}>
            <Text style={styles.h5dark}> Item Location </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 10,
              }}
            >
              {FILTERS.itemLocation.map((item, index) => (
                <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                  {index === 1 ? (
                    <ButtonSecondary title={item} />
                  ) : (
                    <ButtonOutlined title={item} />
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={{ paddingLeft: 15, marginTop: 20 }}>
            <Text style={styles.h5dark}> Show Only </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                marginTop: 10,
              }}
            >
              {FILTERS.showOnly.map((item, index) => (
                <View key={index} style={{ marginRight: 10, marginBottom: 10 }}>
                  {index === 1 || index === 4 || index === 8 ? (
                    <ButtonSecondary title={item} />
                  ) : (
                    <ButtonOutlined title={item} />
                  )}
                </View>
              ))}
            </View>
          </View>
          <View style={{ padding: 15 }}>
            <ButtonPrimary title='Apply' />
          </View>
        </ScrollView>
      </View>
    </BottomSheet>
  );

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
      <>
        <CategoryBottomSheet />
        <SortBottomSheet />
        <FilterBottomSheet />

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
              <Text
                style={styles.bodyTextDark}
                onPress={() => {
                  setVisible(true);
                }}
              >
                Man Shoes
              </Text>
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
      </>
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
  bodyTextDark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: COLORS.dark,
  },
  h2dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: COLORS.dark,
  },
  h4dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.dark,
  },
  h5dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.dark,
  },
});

export default SearchResults;
