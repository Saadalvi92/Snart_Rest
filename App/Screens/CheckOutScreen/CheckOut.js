import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import AppButton from '../../Components/AppButton';
import CheckOutCard from '../../Components/CheckOutCard';
import AppText from '../../Components/AppText';
import styles from './Style';
import {getPixelSizeForLayoutSize} from 'react-native/Libraries/Utilities/PixelRatio';

const Check_data = [
  {title: 'KFC', Subtitle: 'Hot Wing', qty: '1', price: 29, image: ''},
  {title: 'Dixey', Subtitle: 'ChickenBurger', qty: '1', price: 29, image: ''},
];
function CheckOut({navigation, route}) {
  const paramdata = route.params[0];

  const cart = paramdata.cart;
  var newCart = [];
  var TotalUnitP = 0;
  var Total = 0;

  const payout = newCart => {
    navigation.navigate('PayMethod', newCart);
    // console.log(newCart);
  };
  return (
    <ScrollView>
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
            onPress={() => {
              payout((newCart = [...cart, {Total}, route.params[0].id]));
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default CheckOut;
//
