import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import AppButton from '../../Components/AppButton';
import CheckOutCard from '../../Components/CheckOutCard';
import AppText from '../../Components/AppText';
import styles from './Style';

const Check_data = [
  {title: 'KFC', Subtitle: 'Hot Wing', qty: '1', price: 29, image: ''},
  {title: 'Dixey', Subtitle: 'ChickenBurger', qty: '1', price: 29, image: ''},
];
function CheckOut({navigation, route}) {
  const cartdemo = Object.entries(route.params).map(e => {
    return e[1];
  });
  const cart = cartdemo[0];
  var TotalUnitP = 0;
  var Total = 0;
  return (
    <View>
      {cart.map(e => {
        TotalUnitP = e.price * 1;
        Total = TotalUnitP + Total;
        return (
          <CheckOutCard
            title={e.title}
            Price={e.price}
            qty={e.qty}
            image={e.image}
          />
        );
      })}
      <Text style={styles.txt}>Estimated Delivery Time: 1 Hour</Text>
      <View style={styles.endbox}>
        <AppText style={styles.Total}>
          Total:£
          {Total}
        </AppText>
        <AppButton
          title="Pay"
          onPress={() => navigation.navigate('PayMethod', Total)}
        />
      </View>
    </View>
  );
}

export default CheckOut;
