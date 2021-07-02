import React from 'react';
import Center from './Center';
import {ActivityIndicator} from 'react-native';
import COLORS from '../utils/constants/colors';

const Loader = () => {
  return (
    <Center>
      <ActivityIndicator size={'large'} color={COLORS.tomato} />
    </Center>
  );
};

export default Loader;
