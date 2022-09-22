import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, Image, Icon } from '@rneui/base';
import COLORS from '../../constants/colors';
import InputField from '../../components/InputField';
import ButtonPrimary from '../../components/ButtonPrimary';

const LoginScreen = (props) => {
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
        <Text style={styles.headingText}>Welcome to Super Store</Text>
        <Text style={[styles.bodyText, { marginTop: 5 }]}>
          Sign in to continue
        </Text>
      </View>
      <View style={{ width: '100%', marginTop: 20, alignItems: 'center' }}>
        <View style={{ width: '90%' }}>
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
          />
        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <ButtonPrimary
            title='Sign In'
            onPressHandler={() => {
              navigation.navigate('homeFeed');
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>
      <View style={{ width: '100%', alignItems: 'center', marginTop: 20 }}>
        <View style={{ marginVertical: 5, width: '90%' }}>
          <Button
            title={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.buttonTextOutlined}>Login with Google</Text>
              </View>
            }
            type='outline'
            icon={
              <View
                style={{
                  flex: 0.1,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  name='google'
                  type='font-awesome'
                  size={16}
                  color={COLORS.red}
                />
              </View>
            }
            buttonStyle={{ borderColor: COLORS.light }}
            onPress={() => {
              navigation.navigate('homeFeed');
            }}
          />
        </View>
        <View style={{ marginVertical: 5, width: '90%' }}>
          <Button
            title={
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.buttonTextOutlined}>
                  Login with Facebook
                </Text>
              </View>
            }
            type='outline'
            icon={
              <View
                style={{
                  flex: 0.1,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}
              >
                <Icon
                  name='facebook'
                  type='font-awesome'
                  size={16}
                  color={COLORS.blue}
                />
              </View>
            }
            buttonStyle={{ borderColor: COLORS.light }}
            onPress={() => {
              navigation.navigate('homeFeed');
            }}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={styles.linkText}>Forgot Password?</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.bodyText}>Dont have an account? </Text>
          <Text
            style={styles.linkText}
            onPress={() => navigation.navigate('registerScreen')}
          >
            Register
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

export default LoginScreen;
