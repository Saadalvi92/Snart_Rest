import React from 'react';
import {ScrollView, Text, View} from 'react-native';
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
      id: 3,
      title: 'Pepes',
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
      id: 3,
      title: 'Pepes',
      subtitle: 'Product Name',
      image: '',
    },
  ];

  return (
    <View>
      <ScrollView>
        <View style={{flexDirection: 'column', flex: 1}}>
          {Res_data.map(e => (
            <View flex={1 / 2}>
              <CardComponent
                title={e.title}
                subTitle={e.subtitle}
                image={e.image}
                onPress={() => navigation.navigate('Items')}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default ResturantScreen;
