import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../utils/constants/colors';
import {PrimaryButton} from '../components/Button';
import CheckoutSteps from '../components/CheckoutSteps';

import {saveShippingAddress} from '../redux/actions/cartActions';

const Shipping = ({navigation}) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const {shippingAddress} = cart;

  const [address, setAddress] = useState(
    typeof shippingAddress.address === 'undefined'
      ? ''
      : shippingAddress.address,
  );
  const [city, setCity] = useState(
    typeof shippingAddress.city === 'undefined' ? '' : shippingAddress.city,
  );
  const [postalCode, setPostalCode] = useState(
    typeof shippingAddress.postalCode === 'undefined'
      ? ''
      : shippingAddress.postalCode,
  );
  const [country, setCountry] = useState(
    typeof shippingAddress.country === 'undefined'
      ? ''
      : shippingAddress.country,
  );

  const onPress = () => {
    if (address === '' || city === '' || postalCode === '' || country === '') {
      Alert.alert('Empty Fields', 'Fields are empty!');
      return;
    }
    dispatch(saveShippingAddress({address, city, postalCode, country}));
    navigation.navigate('Payment');
  };

  const handleNav = nav => {
    navigation.navigate(nav);
  };

  return (
    <SafeAreaView style={style.container}>
      <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <CheckoutSteps step1 step2 handleNav={handleNav} />
      <View style={style.addressContainer}>
        <View style={style.registerForm}>
          <Text style={style.header}>Register Your Shipping Address</Text>

          <TextInput
            style={style.textInput}
            placeholder={'Address'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={address}
            onChangeText={value => setAddress(value)}
          />

          <TextInput
            style={style.textInput}
            placeholder={'City'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={city}
            onChangeText={value => setCity(value)}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Postal Code'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={postalCode}
            onChangeText={value => setPostalCode(value)}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Country'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={country}
            onChangeText={value => setCountry(value)}
          />

          <View style={{marginTop: 20}}>
            <PrimaryButton title="Continue" onPress={onPress} />
          </View>
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
  appName: {
    alignSelf: 'center',
    fontSize: 30,
    color: COLORS.dark,
    marginBottom: 100,
  },
  registerForm: {
    alignSelf: 'stretch',
  },
  appTitle: {
    fontSize: 24,
    color: COLORS.dark,
    paddingBottom: 10,
    marginBottom: 40,
    alignSelf: 'center',
  },
  header: {
    fontSize: 20,
    color: COLORS.dark,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 3,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: COLORS.dark,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 2,
  },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.dark,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Shipping;
