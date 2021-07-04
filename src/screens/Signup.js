import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';

import {register} from '../redux/actions/userActions';

import COLORS from '../utils/constants/colors';

const Signup = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const userRegister = useSelector(state => state.userRegister);

  const {loading, error, userInfo} = userRegister;

  const redirect = route.params;

  useEffect(() => {
    if (userInfo) {
      if (redirect) {
        navigation.navigate(redirect);
      }
    }
  }, [userInfo, redirect]);

  const validateEmail = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  };

  const registerUser = () => {
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      Alert.alert('Empty Fields', 'Fields are empty!');
      return;
    }
    if (validateEmail()) {
      if (password !== confirmPassword) {
        Alert.alert('Password', 'Password is invalid!');
      } else {
        dispatch(register(name, email, password));
      }
    } else {
      Alert.alert('Email', 'Email is invalid!');
    }
  };

  return (
    <SafeAreaView style={style.container}>
      {error && <Message>{error}</Message>}
      <View style={style.registerForm}>
        <Text style={style.appTitle}>FOOD KING</Text>

        <Text style={style.header}>Register</Text>
        <TextInput
          style={style.textInput}
          placeholder={'Name'}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
          value={name}
          onChangeText={value => setName(value)}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Email'}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
          value={email}
          onChangeText={value => setEmail(value)}
        />

        {loading && <Loader />}

        <TextInput
          style={style.textInput}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
          value={password}
          onChangeText={value => setPassword(value)}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Confirm Password'}
          secureTextEntry={true}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
          value={confirmPassword}
          onChangeText={value => setConfirmPassword(value)}
        />

        <TouchableOpacity style={style.button} onPress={registerUser}>
          <Text style={style.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login', (redirect = redirect))}>
          <Text style={style.already}>Already have accout? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
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
