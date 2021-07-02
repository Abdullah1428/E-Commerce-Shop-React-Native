import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../utils/constants/colors';
import {PrimaryButton} from '../components/Button';
import CheckoutSteps from '../components/CheckoutSteps';

const Shipping = ({navigation}) => {
  const onPress = () => {
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
          />

          <TextInput
            style={style.textInput}
            placeholder={'City'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Postal Code'}
            secureTextEntry={true}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Country'}
            secureTextEntry={true}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
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
