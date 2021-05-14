//Import React
import React from 'react';
import * as yup from 'yup';
import axios from 'axios';
//Import react-native
import {View, Text, Image, TouchableOpacity} from 'react-native';

//styles Import
import styles from './Style';
//Component Import
import {AppForm, AppFormField, SubmitButton} from '../../Components/forms';
import colors from '../../config/colors';
import FbLogin from '../../Components/FbLoign';
import {useEffect} from 'react';
import {useState} from 'react';
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(4).label('Password'),
});
// var options = {
//   method: 'GET',
//   url: 'http://sfreshveg.apishub.xyz/smartrestaurent',
// };api need
const login_details = [{Email: 'demo@gmail.com', Password: '1234'}];
function WelcomeImageScreen({navigation}) {
  // useEffect(() => { done for api but failed due to failed api in postman
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       if (response.status === 200 && response != null) {
  //         console.log(response.data);
  //       } else {
  //         throw new Error('Empty Data');
  //       }
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  const Login = Values => {
    if (Values.email == 'demo@gmail.com' && Values.password == '1234') {
      navigation.navigate('Login');
    }
  };
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}></Image>
      </View>
      <View style={styles.buttonsContainer}>
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={Values => {
            Login(Values);
          }}
          validationSchema={validationSchema}>
          <AppFormField
            placeholder="Email                            "
            autoCaptalize="none"
            icon="email"
            name="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            placeholder="Password                             "
            autoCaptalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            secureTextEntry={true}
          />
          <SubmitButton title="Login" />
          <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
            OR
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
              Create Account with Email
            </Text>
          </TouchableOpacity>
          <FbLogin />
        </AppForm>
      </View>
    </View>
  );
}
export default WelcomeImageScreen;
