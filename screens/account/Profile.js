import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image, ListItem, Icon } from '@rneui/themed';
import COLORS from '../../constants/colors';

const profileOptions = [
  {
    icon: {
      name: 'gender-male-female',
      type: 'material-community',
    },
    option: 'Gender',
    subtitle: 'Male',
  },
  {
    icon: {
      name: 'calendar',
      type: 'ant-design',
    },
    option: 'Birthday',
    subtitle: '12-12-2000',
  },
  {
    icon: {
      name: 'mail',
      type: 'ant-design',
    },
    option: 'Email',
    subtitle: 'derlaxy@yahoo.com',
  },
  {
    icon: {
      name: 'smartphone',
      type: 'feather',
    },
    option: 'Phone Number',
    subtitle: '(307) 555-0133',
  },
  {
    icon: {
      name: 'lock',
      type: 'feather',
    },
    option: 'Change Password',
    subtitle: '********',
  },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 15, marginTop: 20 }}>
        <View
          style={{
            width: '23%',
          }}
        >
          <Image
            source={require('../../assets/images/review/profile-picture.png')}
            style={{
              aspectRatio: 1,
              width: 72,
              height: 72,
            }}
          />
        </View>
        <View
          style={{
            width: '75%',
            // justifyContent: 'center',
          }}
        >
          <View
            style={{
              marginBottom: 5,
              paddingTop: 10,
            }}
          >
            <Text style={styles.h5Dark}>Maximus Gold</Text>
          </View>
          <View>
            <Text style={styles.bodyRegular}>@derlaxy</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
        }}
      >
        {profileOptions.map((item, index) => (
          <ListItem
            key={index}
            onPress={() => {
              // navigation.navigate(item.navigate);
            }}
          >
            <Icon
              name={item.icon.name}
              type={item.icon.type}
              color={COLORS.blue}
              size={20}
            />
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate(item.navigate);
              }}
            >
              <ListItem.Content>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '85%',
                  }}
                >
                  <View style={{ width: '50%' }}>
                    <Text style={styles.h5Dark}>{item.option}</Text>
                  </View>
                  <View
                    style={{
                      width: '62%',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                    }}
                  >
                    <Text style={[styles.bodyRegular, { marginTop: 3 }]}>
                      {item.subtitle}
                    </Text>
                    <Icon
                      name='keyboard-arrow-right'
                      type='material-icon'
                      color={COLORS.grey}
                      style={{ marginLeft: 10 }}
                    />
                  </View>
                </View>
              </ListItem.Content>
            </TouchableOpacity>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  h5Dark: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: COLORS.dark,
  },
  bodyRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: COLORS.grey,
  },
});

export default Profile;
