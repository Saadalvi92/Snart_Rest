import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import AppButton from '../../Components/AppButton';
import CheckOutCard from '../../Components/CheckOutCard';
import AppText from '../../Components/AppText';
import styles from './Style';
const Check_data = [
  {title: 'KFC', Subtitle: 'Hot Wing', qty: '1', price: 29, image: ''},
  {title: 'Dixey', Subtitle: 'ChickenBurger', qty: '1', price: 29, image: ''},
  {title: 'KFC', Subtitle: 'Hot Wing', qty: '2', price: 29, image: ''},
  {title: 'KFC', Subtitle: 'Hot Wing', qty: '1', price: 29, image: ''},
  {title: 'Dixey', Subtitle: 'ChickenBurger', qty: '1', price: 29, image: ''},
  {title: 'KFC', Subtitle: 'Hot Wing', qty: '2', price: 29, image: ''},
];
function CheckOut({navigation}) {
  var TotalUnitP = 0;
  var Total = 0;
  return (
    <View>
      <ScrollView>
        {Check_data.map(e => {
          TotalUnitP = e.price * e.qty;
          Total = TotalUnitP + Total;
          return (
            <CheckOutCard
              title={e.title}
              subTitle={e.Subtitle}
              Price={e.price * e.qty}
              qty={e.qty}
              image={e.image}
            />
          );
        })}
        <Text style={styles.txt}>Estimated Delivery Time: 1 Hour</Text>
        <View style={styles.endbox}>
          <AppText style={styles.Total}>Total:${Total}</AppText>
          <AppButton
            title="Pay"
            onPress={() => navigation.navigate('PayMethod')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default CheckOut;
