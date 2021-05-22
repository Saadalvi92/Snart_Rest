import React from 'react';
import {View, Text, Alert, Button} from 'react-native';
import axios from 'axios';
import colors from '../../config/colors';
import {useEffect} from 'react';

function OrderComplete({navigation, route}) {
  const cart = route.params;
  const userId = cart[cart.length - 1].userid.toString();
  for (let index = 0; index < cart.length - 2; index++) {
    const price = cart[index].price.toString();
    const title = cart[index].title.toString();
    const image = cart[index].image;
    var data = JSON.stringify({
      itemTitle: title,
      price: price,
      quantity: '1',
      userId: userId,
    });
    var config = {
      method: 'post',
      url: 'http://smartres.suretostop.com/smartrestaurent/placeOrder',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
  }
  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log(response.data);
        Alert.alert(
          'Order Confirmed',
          'To continue shopping click on the resturant tab',
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Button
        title="Order More"
        color={colors.mediumGrey}
        onPress={() => {
          navigation.navigate('Login');
        }}></Button> */}
    </View>
  );
}

export default OrderComplete;
