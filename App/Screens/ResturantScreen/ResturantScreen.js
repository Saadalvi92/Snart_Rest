import React from 'react';
import {ScrollView, FlatList, Text, View} from 'react-native';
import CardComponent from '../../Components/CardComponent';
function ResturantScreen({navigation}) {
  const Res_data = [
    {
      id: 1,
      title: 'Mechdonalds',
      subtitle: 'Product Name',
      image: '../../assets/background.jpg',
    },
    {
      id: 2,
      title: 'KFC',
      subtitle: 'Product Name',
      image: '',
    },
    {
      id: 3,
      title: 'Pepes',
      subtitle: 'Product Name',
      image: '',
    },
    {
      id: 4,
      title: 'Pepes',
      subtitle: 'Product Name',
      image: '',
    },
    {
      id: 5,
      title: 'Pepes',
      subtitle: 'Product Name',
      image: '',
    },
    {
      id: 6,
      title: 'Pepes',
      subtitle: 'Product Name',
      image: '',
    },
  ];

  return (
    <View>
      <FlatList
        data={Res_data}
        numColumns={2}
        renderItem={({item}) => (
          <CardComponent
            title={item.title}
            subTitle={item.subtitle}
            image={item.image}
            onPress={() => navigation.navigate('Items')}
          />
        )}
      />
    </View>
  );
}

export default ResturantScreen;
