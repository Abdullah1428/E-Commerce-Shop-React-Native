import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/constants/colors';
import {PrimaryButton} from '../components/Button';

const Profile = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Payment');
  };

  const handleLogout = () => {
    // logout user
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => console.log('OK Pressed')},
    ]);
  };

  return (
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

      <View style={style.addressContainer}>
        <View style={style.registerForm}>
          <Text style={style.header}>User Profile</Text>

          <TextInput
            style={style.textInput}
            placeholder={'Name'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Email Address'}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
          />

          <TextInput
            style={style.textInput}
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor={COLORS.dark}
            underlineColorAndroid={'transparent'}
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
});

export default Profile;
