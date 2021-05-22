import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';
import CardComponent from '../../Components/CardComponent';
import axios from 'axios';
import GetLocation from 'react-native-get-location';
import AppIcon from '../../Components/AppIcon';
import colors from '../../config/colors';
function ResturantScreen({navigation, route}) {
  var userId = route.params;
  var [address, setAddress] = useState();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  var config = {
    method: 'get',
    url: 'http://smartres.suretostop.com/getRestaurents',
  };
  function showPosition(position) {
    var lat = position.latitude;
    var lang = position.longitude;

    axios
      .get('https://us1.locationiq.com/v1/reverse.php', {
        params: {
          key: 'pk.9611ea33973facbfc43e473bcf486c8c',
          lat: lat,
          lon: lang,
          format: 'json',
        },
      })
      .then(function (response) {
        var obj = response.data.address;

        if (obj.city) {
          setAddress(obj.city);
        } else if (obj.country) {
          setAddress(obj.country);
        } else if (obj.state) {
          setAddress(obj.state);
        } else if (obj.county) {
          setAddress(obj.county);
        } else if (obj.house_number) {
          setAddress(bj.house_number);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const location = () => {};
  useEffect(() => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        showPosition(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
    axios(config)
      .then(function (response) {
        if (response.status === 200 && response != null) {
          setData(response.data);
          setMasterDataSource(response.data);
        } else {
          throw new Error('Empty Data');
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const ResturantDeliverables = item => {
    const itemId = item.id;
    navigation.navigate('Items', {itemId, userId});
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setSearch(text);
    } else {
      setData(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.white,
        }}>
        <AppIcon name="map-marker-radius" />
        <Text>{address}</Text>
      </View>
      <ScrollView>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={data.id}
          renderItem={({item}) => (
            <CardComponent
              title={item.name}
              subTitle={item.product_name}
              image={item.image}
              onPress={() => ResturantDeliverables(item)}
            />
          )}
        />
      </ScrollView>
    </View>
  );
}

export default ResturantScreen;
const styles = StyleSheet.create({
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#000',
    elevation: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
  },
});
