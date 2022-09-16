import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, Image } from '@rneui/base';

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          maxHeight: 100,
          // backgroundColor: 'blue',
        }}
      >
        <Image
          source={require('../../assets/icon.png')}
          containerStyle={{
            aspectRatio: 1,
            width: '100%',
            height: 73,
            alignSelf: 'center',
            // backgroundColor: 'green',
          }}
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.headingText}>Welcome to Super Store</Text>
        <Text style={styles.bodyText}>Sign in to continue</Text>
      </View>
      <View style={{ width: '100%', marginTop: 20 }}>
        <Input
          placeholder='Your Email'
          inputStyle={styles.bodyText}
          inputContainerStyle={styles.inputContainer}
          leftIcon={{ type: 'ant-design', name: 'mail', color: 'grey' }}
        />
        <Input
          placeholder='Password'
          inputStyle={styles.bodyText}
          inputContainerStyle={styles.inputContainer}
          leftIcon={{ type: 'feather', name: 'lock', color: 'grey' }}
        />
        <View style={{ alignItems: 'center' }}>
          <Button
            title='Sign In'
            onPress={() => {}}
            containerStyle={{
              width: '86%',
              borderRadius: 5,
            }}
            titleStyle={styles.buttonText}
            buttonStyle={{ paddingVertical: 15, backgroundColor: '#40BFFF' }}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={styles.divider} />
        <Text style={styles.buttonText}>OR</Text>
        <View style={styles.divider} />
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <View style={{ marginVertical: 5, width: '90%' }}>
          <Button
            title={'Login with Google'}
            titleStyle={styles.buttonText}
            type='outline'
            icon={{
              type: 'ant-design',
              name: 'google',
              color: 'red',
            }}
          />
        </View>
        <View style={{ marginVertical: 5, width: '90%' }}>
          <Button
            title={'Login with Facebook'}
            titleStyle={styles.buttonText}
            type='outline'
            icon={{ type: 'font-awesome', name: 'facebook', color: 'blue' }}
          />
        </View>
      </View>
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>Forgot Password?</Text>
        <Text>Dont have an account? Register</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  divider: { width: '40%', borderTopColor: 'lightgrey', borderTopWidth: 1 },
  headingText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
  bodyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  buttonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },
});

export default LoginScreen;
