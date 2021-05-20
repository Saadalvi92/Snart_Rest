import React, {useEffect} from 'react';
import {ScrollView, FlatList, Text, View} from 'react-native';
import CardComponent from '../../Components/CardComponent';
import axios from 'axios';

import {useState} from 'react';
function ResturantScreen({navigation}) {
  var config = {
    method: 'get',
    url: 'http://smartres.suretostop.com/getRestaurents',
  };
  // (JSON.stringify(response.data))

  useEffect(() => {
    axios(config)
      .then(function (response) {
        if (response.status === 200 && response != null) {
          setData(response.data);
        } else {
          throw new Error('Empty Data');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const [data, setData] = useState([]);
  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={data.id}
        renderItem={({item}) => (
          <CardComponent
            title={item.name}
            subTitle={item.product_name}
            image={item.image}
            onPress={() => navigation.navigate('Items', item.id)}
          />
        )}
      />
    </View>
  );
}

export default ResturantScreen;
