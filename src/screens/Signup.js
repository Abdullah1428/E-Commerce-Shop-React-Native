import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import COLORS from '../utils/constants/colors';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.registerForm}>
        <Text style={style.appTitle}>FOOD KING</Text>

        <Text style={style.header}>Register</Text>

        <TextInput
          style={style.textInput}
          placeholder={'Name'}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Email'}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
        />

        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={style.already}>Already have accout? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.tomato,
    justifyContent: 'center',
    paddingLeft: 60,
    paddingRight: 60,
  },
  appName: {
    alignSelf: 'center',
    fontSize: 30,
    color: COLORS.white,
    marginBottom: 100,
  },
  registerForm: {
    alignSelf: 'stretch',
  },
  appTitle: {
    fontSize: 24,
    color: COLORS.white,
    paddingBottom: 10,
    marginBottom: 40,
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    color: COLORS.white,
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
  },
  textInput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: COLORS.white,
    borderBottomColor: COLORS.white,
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
  already: {
    color: COLORS.white,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Signup;
