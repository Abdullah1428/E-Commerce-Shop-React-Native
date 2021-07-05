import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

// product reducers
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer,
  productStockUpdateReducer,
} from './redux/reducers/productReducers';
//  cart reducers
import {cartReducer} from './redux/reducers/cartReducers';
// user reducers
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './redux/reducers/userReducers';
// order reducers
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderDeliverReducer,
  orderListMyOrdersReducer,
  orderListReducer,
} from './redux/reducers/orderReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productReviewCreateReducer,
  productTopRated: productTopRatedReducer,
  productStockUpdate: productStockUpdateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderDeliver: orderDeliverReducer,
  orderListMyOrders: orderListMyOrdersReducer,
  orderList: orderListReducer,
});

let cartItemsFromStorage = [];
let userInfoFromStorage = null;
let shippingAddressFromStorage = {};
let paymentMethodFromStorage = null;

async function getAsyncStorageItems() {
  try {
    cartItemsFromStorage = await AsyncStorage.getItem('cartItems');
    cartItemsFromStorage = cartItemsFromStorage
      ? JSON.parse(cartItemsFromStorage)
      : [];

    userInfoFromStorage = await AsyncStorage.getItem('userInfo');
    userInfoFromStorage = userInfoFromStorage
      ? JSON.parse(userInfoFromStorage)
      : null;

    shippingAddressFromStorage = await AsyncStorage.getItem('shippingAddress');
    shippingAddressFromStorage = shippingAddressFromStorage
      ? JSON.parse(shippingAddressFromStorage)
      : {};

    paymentMethodFromStorage = await AsyncStorage.getItem('paymentMethod');
    paymentMethodFromStorage = paymentMethodFromStorage
      ? JSON.parse(paymentMethodFromStorage)
      : null;
  } catch (error) {
    console.log(error);
  }
}

getAsyncStorageItems();

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: {userInfo: userInfoFromStorage},
};

const middleware = [thunk];

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
