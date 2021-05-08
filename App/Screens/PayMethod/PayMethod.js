import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import * as Yup from 'yup';
import colors from '../../config/colors';
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../../Components/forms';
import AppText from '../../Components/AppText';
import styles from './Style';
const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),

  cardNumber: Yup.number().required().positive().label('Card number').max(16),
  cvc: Yup.number().min(3).max(4).required().label('CVC'),
  expiryMonth: Yup.number().label('Expiry Month').required(),
  ExpiryYear: Yup.number().label('Expiry Year').required(),
  CardType: Yup.string().label('Card type').required(),
});
function PayMethod(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <AppText>CARD DETAILS</AppText>
        <Form
          initialValues={{
            name: '',
            cardNumber: '',
            cvc: '',
            expiryMonth: '',
            ExpiryYear: '',
            CardType: '',
          }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}>
          <FormField
            autoCorrect={false}
            autoCapitalize="characters"
            name="name"
            placeholder="Name"
          />
          <FormField
            autoCorrect={false}
            keyboardType="number-pad"
            name="cardNumber"
            maxLength={16}
            placeholder="Card Number"
          />
          <View>
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="expiryMonth"
              placeholder="Expiry Month"
              maxLength={2}
              keyboardType="number-pad"
            />
            <FormField
              autoCapitalize="none"
              autoCorrect={false}
              name="ExpiryYear"
              placeholder="Expiry Year"
              keyboardType="number-pad"
              maxLength={2}
            />
          </View>
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            name="cvc"
            placeholder="CVC"
            secureTextEntry
            keyboardType="number-pad"
          />

          <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
            Your CVV is the last 3 Digits in the signatire strip
          </Text>
          <Text style={{textAlign: 'center', color: colors.mediumGrey}}>
            on the back of your card
          </Text>

          <SubmitButton title="Pay" />
        </Form>
      </ScrollView>
    </View>
  );
}

export default PayMethod;
