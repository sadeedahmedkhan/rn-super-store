import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from '@rneui/themed';
import COLORS from '../../constants/colors';
import ButtonPrimary from '../../components/ButtonPrimary';

const PaymentSuccess = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ marginBottom: -20 }}>
          <Image
            source={require('../../assets/icons/Success-Icon.png')}
            style={{
              aspectRatio: 1,
              width: 150,
              height: 150,
            }}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.h2Dark}>Success</Text>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.bodyRegular}>
            Thank you for shopping with us!
          </Text>
        </View>
        <View style={{ width: '100%', paddingHorizontal: 15 }}>
          <ButtonPrimary title='Back to Order' />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  h2Dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: COLORS.dark,
  },
  bodyRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default PaymentSuccess;
