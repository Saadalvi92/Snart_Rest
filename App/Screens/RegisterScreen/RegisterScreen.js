import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../../Components/forms';
import colors from '../../config/colors';
import styles from './Style';
import FormData from 'form-data';
import axios from 'axios';
var data = new FormData();
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});
function RegisterScreen(props) {
  const signup = values => {
    data.append('email', values.email);
    data.append('password', values.password);
    var config = {
      method: 'post',
      url: 'http://smartres.suretostop.com/signup',
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data == 1) {
          alert('SignUp Successfull');
          navigation.navigate('Login');
        } else {
          alert('SignUp unsuccessfull');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Form
        initialValues={{name: '', email: '', password: ''}}
        onSubmit={values => signup(values)}
        validationSchema={validationSchema}>
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
          By proceeding you also agree to the Terms
        </Text>
        <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
          of Service and Privacy Policy
        </Text>
        <SubmitButton title="Register" />
      </Form>
      <TouchableOpacity>
        <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
          Already Have an account?Sign in
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;
