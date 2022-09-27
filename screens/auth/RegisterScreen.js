import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, Image, Icon } from '@rneui/base';
import COLORS from '../../constants/colors';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';

const RegisterScreen = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          maxHeight: 100,
        }}
      >
        <Image
          source={require('../../assets/icon.png')}
          containerStyle={{
            aspectRatio: 1,
            width: '100%',
            height: 73,
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.headingText}>Let's Get Started</Text>
        <Text style={[styles.bodyText, { marginTop: 5 }]}>
          Create a new account
        </Text>
      </View>
      <View style={{ width: '100%', marginTop: 20, alignItems: 'center' }}>
        <View style={{ width: '90%' }}>
          <InputField
            placeholderText='Full Name'
            leftIcon={{
              type: 'ant-design',
              name: 'user',
              color: COLORS.grey,
              size: 18,
            }}
            containerStyle={{ marginBottom: -9 }}
          />
          <InputField
            placeholderText='Your Email'
            leftIcon={{
              type: 'ant-design',
              name: 'mail',
              color: COLORS.grey,
              size: 18,
            }}
            containerStyle={{ marginBottom: -9 }}
          />
          <InputField
            placeholderText='Password'
            leftIcon={{
              type: 'feather',
              name: 'lock',
              color: COLORS.grey,
              size: 18,
            }}
            containerStyle={{ marginBottom: -9 }}
          />
          <InputField
            placeholderText='Password Again'
            leftIcon={{
              type: 'feather',
              name: 'lock',
              color: COLORS.grey,
              size: 18,
            }}
          />
        </View>
        <View style={{ alignItems: 'center', width: '86%' }}>
          <ButtonPrimary
            title='Sign Up'
            onPressHandler={() => {
              navigation.navigate('homeFeed');
            }}
          />
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.bodyText}>Already have an account? </Text>
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('loginScreen')}
          >
            Sign In
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    borderWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLORS.light,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  divider: { width: '40%', borderTopColor: COLORS.light, borderTopWidth: 1 },
  headingText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: COLORS.dark,
  },
  bodyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
  buttonTextSolid: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
  buttonTextOutlined: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.grey,
  },
  dividerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.grey,
  },
  linkText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
    color: COLORS.blue,
  },
});

export default RegisterScreen;
