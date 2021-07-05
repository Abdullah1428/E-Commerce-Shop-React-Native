import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/constants/colors';

import {PrimaryButton} from '../components/Button';
import Loader from '../components/Loader';
import Message from '../components/Message';

import {
  getUserDetails,
  updateUserProfile,
  logout,
} from '../redux/actions/userActions';

const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [noLogin, setNoLogin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector(state => state.userDetails);
  const {loading, error, user} = userDetails;

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const userUpdateProfile = useSelector(state => state.userUpdateProfile);
  const {success} = userUpdateProfile;

  useEffect(() => {
    if (success) {
      Alert.alert('Profile Updated', 'Profile updated successfully');
    }

    if (error) {
      Alert.alert('Error', error);
    }
  }, [success, error]);

  useEffect(() => {
    if (!userInfo) {
      setNoLogin(true);
    } else {
      setNoLogin(false);
      if (!user.name) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, userInfo, user]);

  const onPress = () => {
    if (password !== confirmPassword) {
      Alert.alert('Password', 'Passwords do not match');
    } else {
      dispatch(updateUserProfile({id: user._id, name, email, password}));
    }
  };

  const handleLogout = () => {
    // logout user
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => dispatch(logout())},
    ]);
  };

  return noLogin ? (
    <>
      <View style={style.viewNoLoginContainer}>
        <Text style={style.titleNoLogin}>
          Don't have an account? Sign Up / Sign In
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login', (redirect = 'Profile'))}>
          <View style={style.viewNoLogin}>
            <Text style={style.textNoLogin}>SIGN UP/ SIGN IN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <SafeAreaView style={style.container}>
      <View style={style.screenHeader}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <AntDesign
          onPress={handleLogout}
          name={'logout'}
          size={28}
          color={COLORS.tomato}
        />
      </View>

      {loading && <Loader />}

      <View style={style.addressContainer}>
        <View style={style.registerForm}>
          <Text style={style.header}>User Profile</Text>

          <TextInput
            style={style.textInput}
            placeholder={'Name'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={name}
            onChangeText={value => setName(value)}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Email Address'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={email}
            onChangeText={value => setEmail(value)}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={password}
            onChangeText={value => setPassword(value)}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
            value={confirmPassword}
            onChangeText={value => setConfirmPassword(value)}
          />

          <View style={{marginTop: 20}}>
            <PrimaryButton title="Update Profile" onPress={onPress} />
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
    paddingTop: 10,
  },
  screenHeader: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  viewNoLoginContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 200,
  },
  titleNoLogin: {
    color: COLORS.primary,
    fontSize: 20,
  },
  textNoLogin: {
    fontSize: 16,
    color: COLORS.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  viewNoLogin: {
    marginTop: 50,
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
