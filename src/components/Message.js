import React, {Children} from 'react';
import Center from './Center';
import {StyleSheet, Text} from 'react-native';
import COLORS from '../utils/constants/colors';

const Message = ({children}) => {
  return (
    <Center>
      <Text style={style.text}>{children}</Text>
    </Center>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLORS.red,
  },
});

export default Message;
