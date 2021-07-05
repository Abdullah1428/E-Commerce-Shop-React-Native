import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import COLORS from '../utils/constants/colors';

import {PrimaryButton} from '../components/Button';
import CheckoutSteps from '../components/CheckoutSteps';

import {savePaymentMethod} from '../redux/actions/cartActions';

const Payment = ({navigation}) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const {shippingAddress} = cart;

  if (!shippingAddress) {
    navigation.navigate('Shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState('Cash');

  const onPress = () => {
    dispatch(savePaymentMethod(paymentMethod));
    navigation.navigate('PlaceOrder');
  };

  const handleNav = nav => {
    navigation.navigate(nav);
  };

  return (
    <SafeAreaView style={style.container}>
      <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <CheckoutSteps step1 step2 step3 handleNav={handleNav} />
      <View style={style.addressContainer}>
        <Text style={style.header}>Payment Method</Text>
        <View style={style.cashContainer}>
          <Fontisto name="checkbox-active" size={25} color={COLORS.dark} />
          <Text style={style.cash}>{paymentMethod}</Text>
        </View>

        <View style={{marginTop: 50}}>
          <PrimaryButton title="Continue" onPress={onPress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  addressContainer: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    color: COLORS.dark,
    paddingBottom: 10,
    marginTop: 40,
    fontWeight: 'bold',
  },
  cashContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  cash: {
    fontSize: 20,
    color: COLORS.dark,
    paddingBottom: 10,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Payment;
