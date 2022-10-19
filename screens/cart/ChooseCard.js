import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ButtonPrimary from '../../components/ButtonPrimary';
import CardItem from '../../components/CardItem';
import COLORS from '../../constants/colors';

const cards = [
  {
    type: 'Credit Card',
    number: '6326     9124     8124     9875',
    cardHolder: 'Lailyfa Febrina',
    expiry: '10/2042',
  },
];

const ChooseCard = (props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 15 }}>
        {cards.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{ marginBottom: 15 }}
            onPress={() => {
              navigation.navigate('paymentSuccess');
            }}
          >
            <CardItem {...item} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default ChooseCard;
