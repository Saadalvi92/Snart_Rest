import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Cat_CardComponent from '../../Components/Cat_CardComponent';
import colors from '../../config/colors';
function ResturantScreen(props) {
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
    <View style={{backgroundColor: colors.mediumGrey}}>
      <ScrollView>
        {Res_data.map(e => (
          <Cat_CardComponent
            title={e.title}
            subTitle={e.subtitle}
            image={e.image}
            onPress={() => console.log('Card Pressed')}
          />
        ))}
      </ScrollView>
    </View>
  );
}

export default ResturantScreen;
