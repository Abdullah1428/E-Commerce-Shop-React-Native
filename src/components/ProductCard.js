import React from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from '../utils/constants/colors';

const width = Dimensions.get('window').width / 2 - 30;

const ProductCard = ({product, handleProduct}) => {
  return (
    <View style={style.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => handleProduct(product)}>
        <View style={style.imageContainer}>
          <Image source={product.image} style={style.image} />
        </View>
        <Text
          numberOfLines={2}
          style={{fontWeight: 'bold', fontSize: 17, marginTop: 20}}>
          {product.name}
        </Text>
      </TouchableOpacity>
      <View style={style.addtoCart}>
        <Text style={style.price}>${product.price}</Text>
        <View style={style.plusBox}>
          <Ionicons name={'add'} size={25} color={COLORS.white} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: COLORS.light,
    width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  plusBox: {
    height: 25,
    width: 25,
    backgroundColor: COLORS.tomato,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.tomato,
  },
  addtoCart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  imageContainer: {
    height: 100,
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: width,
    resizeMode: 'contain',
  },
});

export default ProductCard;
