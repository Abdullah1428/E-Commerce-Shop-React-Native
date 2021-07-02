import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import COLORS from '../utils/constants/colors';

const CheckoutSteps = ({step1, step2, step3, step4, handleNav}) => {
  return (
    <View style={style.container}>
      {step1 ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleNav('Login')}>
          <Text style={style.textHighlight}>Sign In</Text>
        </TouchableOpacity>
      ) : (
        <Text style={style.text}>Sign In</Text>
      )}
      {step2 ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleNav('Shipping')}>
          <Text style={style.textHighlight}>Shipping</Text>
        </TouchableOpacity>
      ) : (
        <Text style={style.text}>Shipping</Text>
      )}
      {step3 ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleNav('Payment')}>
          <Text style={style.textHighlight}>Payment</Text>
        </TouchableOpacity>
      ) : (
        <Text style={style.text}>Payment</Text>
      )}
      {step4 ? (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleNav('PlaceOrder')}>
          <Text style={style.textHighlight}>Place Order</Text>
        </TouchableOpacity>
      ) : (
        <Text style={style.text}>Place Order</Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  textHighlight: {
    color: COLORS.dark,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 2,
    fontWeight: 'bold',
  },
  text: {
    color: COLORS.dark,
  },
});

export default CheckoutSteps;
