import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import COLORS from '../utils/constants/colors';

const CartItem = ({item}) => {
  return (
    <View style={style.container}>
      <Image source={item.image} style={style.imageStyle} />
      <View style={style.detailsContainer}>
        <Text numberOfLines={2} style={style.name}>
          {item.name}
        </Text>
        <Text style={style.category}>{item.category}</Text>
        <Text style={style.price}>${item.price}</Text>
      </View>
      <View style={style.qtyCon}>
        <Text style={style.qty}>3</Text>
        <View style={style.actionBtn}>
          <Icon
            name="remove"
            size={25}
            color={COLORS.white}
            style={{alignSelf: 'center'}}
          />
          <Icon
            name="add"
            size={25}
            color={COLORS.white}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  detailsContainer: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  category: {
    fontSize: 13,
    color: COLORS.grey,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.tomato,
  },
  qtyCon: {
    marginRight: 20,
    alignItems: 'center',
  },
  qty: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  actionBtn: {
    marginTop: 10,
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartItem;
