import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Image } from '@rneui/themed';
import COLORS from '../../constants/colors';

const Offer = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 15,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart', { screen: 'cartScreen' });
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.blue,
              padding: 15,
              borderRadius: 5,
              marginBottom: 15,
            }}
          >
            <Text style={styles.h4White}>
              Use “MEGSL” Cupon For Get 90%off{' '}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', { screen: 'sale' });
          }}
        >
          <View style={{ marginBottom: 15 }}>
            <Image
              source={require('../../assets/images/offer-banner.png')}
              style={{
                aspectRatio: 1,
                width: '100%',
                height: 206,
                borderRadius: 5,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home', { screen: 'home' });
          }}
        >
          <View style={{ marginBottom: 15 }}>
            <Image
              source={require('../../assets/images/recomended-product-banner.png')}
              style={{
                aspectRatio: 1,
                width: '100%',
                height: 206,
                borderRadius: 5,
              }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  h4White: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.white,
  },
});

export default Offer;
