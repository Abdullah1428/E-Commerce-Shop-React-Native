import React, {useState, useRef} from 'react';
import {LOCAL_SERVER_URL} from '@env';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

import COLORS from '../utils/constants/colors';

const CartItem = ({item, addToCartHandler, removeFromCartHandler}) => {
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const [selectedQty, setSelectedQty] = useState(item.qty);

  const handleValueChange = value => {
    setSelectedQty(value);
    addToCartHandler(value, item.product);
  };

  return (
    <View style={style.mainContainer}>
      <View style={style.container}>
        <Image
          source={{uri: `${LOCAL_SERVER_URL}${item.image}`}}
          style={style.imageStyle}
        />
        <View
          style={{flexDirection: 'column', justifyContent: 'space-between'}}>
          <View style={style.detailsContainer}>
            <Text numberOfLines={2} style={style.name}>
              {item.name}
            </Text>
            <Text style={style.price}>${item.price}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Quantity
            </Text>
            <Picker
              style={style.picker}
              mode="dropdown"
              ref={pickerRef}
              selectedValue={selectedQty}
              onValueChange={(itemValue, itemIndex) =>
                handleValueChange(itemValue)
              }>
              {[...Array(item.countInStock).keys()].map(x => (
                <Picker.Item label={`${x + 1}`} key={x + 1} value={x + 1} />
              ))}
            </Picker>
          </View>
        </View>
      </View>
      <View style={{justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => removeFromCartHandler(item.product)}>
          <Icon
            name={'trash-outline'}
            size={30}
            color={COLORS.red}
            style={{alignSelf: 'center', marginRight: 10}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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
    width: '85%',
  },
  imageStyle: {
    height: 80,
    width: 80,
  },
  detailsContainer: {
    height: 100,
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 12,
    width: '60%',
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
  picker: {
    color: 'black',
    height: 40,
    width: '40%',
  },
});

export default CartItem;
