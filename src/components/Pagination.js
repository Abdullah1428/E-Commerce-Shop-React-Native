import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../utils/constants/colors';

import {useNavigation} from '@react-navigation/native';

const Pagination = ({pages, page}) => {
  const navigation = useNavigation();

  return (
    pages > 1 && (
      <View style={style.pagination}>
        {[...Array(pages).keys()].map(x => (
          <View key={x + 1}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate('Home', {pageNumber: x + 1})}>
              <View
                style={
                  x + 1 === page ? style.paginateBoxActive : style.paginateBox
                }>
                <Text
                  style={
                    x + 1 === page ? style.pageNumberActive : style.pageNumber
                  }>
                  {x + 1}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    )
  );
};

const style = StyleSheet.create({
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  paginateBox: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.light,
    backgroundColor: COLORS.light,
    marginLeft: 2,
    justifyContent: 'center',
  },
  paginateBoxActive: {
    height: 40,
    width: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.tomato,
    backgroundColor: COLORS.tomato,
    marginLeft: 2,
    justifyContent: 'center',
  },
  pageNumber: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.tomato,
  },
  pageNumberActive: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    color: COLORS.white,
  },
});

export default Pagination;
