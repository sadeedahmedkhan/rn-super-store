import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Icon } from '@rneui/themed';
import COLORS from '../../constants/colors';

const filters = [1, 2, 3, 4, 5];

const ProductReviews = (props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Button
            type='outline'
            title={'All Reviews'}
            containerStyle={{ marginRight: 10 }}
            buttonStyle={{
              // width: 62,
              height: 40,
              backgroundColor: 'rgba(64, 191, 255, .1)',
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
            titleStyle={{
              fontFamily: 'Poppins-Bold',
              fontSize: 12,
              color: COLORS.blue,
            }}
          />
          {filters.map((item) => (
            <Button
              type='outline'
              title={
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    width: '100%',
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Icon name='star' color={COLORS.yellow} size={15} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 12,
                        color: COLORS.grey,
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </View>
              }
              containerStyle={{
                marginRight: 10,
                borderRadius: 5,
              }}
              buttonStyle={{
                width: 62,
                height: 40,
              }}
              key={item}
              titleStyle={{}}
              iconPosition='left'
            />
          ))}
        </ScrollView>
      </View>
      <Text>Reviews screen</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default ProductReviews;
