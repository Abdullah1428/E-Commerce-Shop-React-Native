import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import COLORS from '../utils/constants/colors';

const OrderHistoryItem = ({item, handleOrderDetail}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={() => handleOrderDetail()}>
      <View style={style.container}>
        <View style={style.detailsContainer}>
          <View style={style.detailsRowContainer}>
            <Text numberOfLines={1} style={style.name}>
              Order ID: {item._id}
            </Text>
            <Text style={style.name}>21-07-2021</Text>
          </View>

          <View style={style.detailsRowContainer}>
            <Text style={style.name}>Total</Text>
          </View>

          <View style={style.detailsRowContainer}>
            <Text style={style.name}>DELIVERED</Text>
            <Text style={style.name}>PAID</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 10,
    elevation: 10,
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
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  detailsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  price: {
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.tomato,
  },
});

export default OrderHistoryItem;
