import axios from 'axios';
import {LOCAL_SERVER_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from '../constants/cartConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {data} = await axios.get(`${LOCAL_SERVER_URL}/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  try {
    await AsyncStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems),
    );
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  try {
    await AsyncStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems),
    );
  } catch (error) {
    console.log(error);
  }
};

export const saveShippingAddress = data => async dispatch => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  try {
    await AsyncStorage.setItem('shippingAddress', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const savePaymentMethod = data => async dispatch => {
  dispatch({
    type: CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });

  try {
    await AsyncStorage.setItem('paymentMethod', JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
