import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import AppText from '../../Components/AppText';
import ListItemSeparotor from '../../Components/ListItemSeperator';
import colors from '../../config/colors';
function AccountScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sub_container}>
        <AppText>Home</AppText>
      </TouchableOpacity>
      <ListItemSeparotor />
      <TouchableOpacity style={styles.sub_container}>
        <AppText>About Application</AppText>
      </TouchableOpacity>
      <ListItemSeparotor />
      <TouchableOpacity style={styles.sub_container}>
        <AppText>Send FeedBack</AppText>
      </TouchableOpacity>
      <ListItemSeparotor />
      <TouchableOpacity style={styles.sub_container}>
        <AppText>Support</AppText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Welcome');
        }}>
        <View style={styles.button}>
          <Text style={styles.Text}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default AccountScreen;
const styles = StyleSheet.create({
  container: {backgroundColor: colors.lightGrey, height: '100%', width: '100%'},
  sub_container: {
    backgroundColor: colors.white,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: colors.mediumGrey,
    padding: 15,
    width: '98%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  Text: {
    color: '#fff',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
