import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Message from '../components/Message';
import Loader from '../components/Loader';

import {login} from '../redux/actions/userActions';

import COLORS from '../utils/constants/colors';

const Login = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);

  const {loading, error, userInfo} = userLogin;

  const redirect = route.params;

  useEffect(() => {
    if (userInfo) {
      if (redirect) {
        navigation.navigate(redirect);
      } else {
        navigation.navigate('Home');
      }
    }
  }, [userInfo, redirect]);

  const loginUser = () => {
    if (email === '' || password === '') {
      Alert.alert('Empty Fields', 'Fields are empty!');
      return;
    }
    dispatch(login(email, password));
  };

  return (
    <SafeAreaView style={style.container}>
      {error && <Message>{error}</Message>}
      <View style={style.registerForm}>
        <Text style={style.appTitle}>FOOD KING</Text>

        <Text style={style.header}>Sign In</Text>

        <TextInput
          style={style.textInput}
          placeholder={'Email'}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <TextInput
          style={style.textInput}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={COLORS.white}
          underlineColorAndroid={'transparent'}
          value={password}
          onChangeText={value => setPassword(value)}
        />

        {loading && <Loader />}

        <TouchableOpacity style={style.button} onPress={loginUser}>
          <Text style={style.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup', (redirect = redirect))}>
          <Text style={style.already}>Don't have an accout? Sign Up</Text>
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
    marginTop: 20,
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

export default Login;
