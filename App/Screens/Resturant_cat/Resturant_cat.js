import React from 'react';
import {useEffect} from 'react';
import {FlatList, View} from 'react-native';
import axios from 'axios';
import FormData from 'form-data';
import Cat_CardComponent from '../../Components/Cat_CardComponent';
import {useState} from 'react';
import AppButton from '../../Components/AppButton';
function ResturantScreen({route, navigation}) {
  const resturant_id = route.params;
  var data = new FormData();
  data.append('restaurentId', resturant_id);
  var config = {
    method: 'post',
    url: 'http://smartres.suretostop.com/getRestaurentItems',

    data: data,
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setCat(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const [cat, setCat] = useState([]);
  const [cart, setCart] = useState([]);
  const AddtoCart = item => {
    setCart([...cart, item]);
  };
  return (
    <View style={{flex: 1, marginLeft: 5, marginRight: 5}}>
      <FlatList
        data={cat}
        keyExtractor={cat.id}
        renderItem={({item}) => (
          <Cat_CardComponent
            title={item.title}
            subTitle={item.price}
            image={item.image}
            onPress={() => {
              AddtoCart(item);
            }}
          />
        )}
      />
      <AppButton
        title={'Cart'}
        onPress={() => {
          navigation.navigate('Checkout', cart);
        }}
      />
    </View>
  );
}

export default ResturantScreen;
