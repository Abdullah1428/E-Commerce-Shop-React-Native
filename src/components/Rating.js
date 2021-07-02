import React from 'react';
import {View, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../utils/constants/colors';

const Rating = ({value}) => {
  // star
  // star-o
  // star-half-o

  return (
    <View style={style.rating}>
      <FontAwesome
        name={value >= 1 ? 'star' : value >= 0.5 ? 'star-half-o' : 'star-o'}
        size={20}
        color={COLORS.tomato}
      />
      <FontAwesome
        name={value >= 2 ? 'star' : value >= 1.5 ? 'star-half-o' : 'star-o'}
        size={20}
        color={COLORS.tomato}
      />
      <FontAwesome
        name={value >= 3 ? 'star' : value >= 2.5 ? 'star-half-o' : 'star-o'}
        size={20}
        color={COLORS.tomato}
      />
      <FontAwesome
        name={value >= 4 ? 'star' : value >= 3.5 ? 'star-half-o' : 'star-o'}
        size={20}
        color={COLORS.tomato}
      />
      <FontAwesome
        name={value >= 5 ? 'star' : value >= 4.5 ? 'star-half-o' : 'star-o'}
        size={20}
        color={COLORS.tomato}
      />
    </View>
  );
};

const style = StyleSheet.create({
  rating: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
});

export default Rating;
