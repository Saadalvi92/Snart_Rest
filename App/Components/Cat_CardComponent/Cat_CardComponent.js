import React from 'react';
import {Image, View} from 'react-native';
import styles from './Style';
import AppText from '../AppText';
import Counter from '../Counter';
function Cat_CardComponent({title, subTitle, Price, image, onPress}) {
  return (
    <View style={styles.card}>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <AppText>${Price} per Item</AppText>
        <Counter style={{marginTop: 10}} />
      </View>
      <Image style={styles.image} source={image} />
    </View>
  );
}

export default Cat_CardComponent;
