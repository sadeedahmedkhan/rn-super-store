import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Image, Icon } from '@rneui/themed';
import COLORS from '../constants/colors';

const CartItem = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '25%',
        }}
      >
        <Image
          source={props.image}
          style={{ height: 72, width: 72, aspectRatio: 1 }}
        />
      </View>
      <View style={{ width: '75%' }}>
        <View style={{ width: '100%', flexDirection: 'row' }}>
          <View
            style={{
              flexWrap: 'wrap',
              width: '70%',
              flexDirection: 'row',
            }}
          >
            <Text style={styles.h6Dark}>{props.title}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '30%',
              justifyContent: 'space-evenly',
            }}
          >
            <Icon
              name={props.fav ? 'heart' : 'hearto'}
              type='ant-design'
              color={props.fav ? COLORS.red : COLORS.grey}
            />
            <Icon name='trash' type='feather' color={COLORS.grey} />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}
        >
          <Text style={styles.h6Blue}>${props.price}</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[
                styles.qtyControls,
                {
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                },
              ]}
              underlayColor={COLORS.light}
            >
              <Text style={styles.qtyBtnText}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled
              style={[
                styles.qtyControls,
                {
                  backgroundColor: COLORS.light,
                  width: 40,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: COLORS.grey,
                }}
              >
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.qtyControls,
                {
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                },
              ]}
              underlayColor={COLORS.light}
            >
              <Text style={styles.qtyBtnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: COLORS.light,
    borderRadius: 5,
    borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
  },
  h6Dark: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: COLORS.dark,
  },
  h6Blue: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    color: COLORS.blue,
  },
  qtyControls: {
    borderWidth: 1,
    borderColor: COLORS.light,
    width: 32,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnText: { fontFamily: 'Poppins-Bold', color: COLORS.grey },
});

export default CartItem;
