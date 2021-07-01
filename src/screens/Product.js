import React from 'react';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/constants/colors';

const Product = ({navigation, route}) => {
  const product = route.params;

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={28} />
      </View>
      <View style={style.imageContainer}>
        <Image source={product.image} style={style.imageStyle} />
      </View>
      <View style={style.detailsContainer}>
        <View style={style.productNamePrice}>
          <Text style={style.name}>{product.name}</Text>
          <View style={style.priceTag}>
            <Text style={style.price}>${product.price}</Text>
          </View>
        </View>
        <View style={style.qtyBuy}>
          <View style={style.qtyBuyContainer}>
            <View style={style.borderBtn}>
              <AntDesign name={'minus'} size={25} color={COLORS.tomato} />
            </View>
            <Text style={style.qty}>1</Text>
            <View style={style.borderBtn}>
              <Ionicons name={'add'} size={25} color={COLORS.tomato} />
            </View>
          </View>

          <View style={style.priceTag}>
            <Text style={style.buyText}>Buy</Text>
          </View>
        </View>
        <View style={style.aboutContainer}>
          <Text numberOfLines={5} style={style.aboutText}>
            About
          </Text>
          <Text style={style.productDes}>{product.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    flex: 1,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  productNamePrice: {
    marginLeft: 20,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    marginLeft: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  qtyBuy: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qtyBuyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  qty: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtn: {
    width: 120,
    height: 40,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  buyText: {
    alignSelf: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  aboutText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDes: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
});

export default Product;
