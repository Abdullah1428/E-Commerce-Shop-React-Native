import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import COLORS from '../utils/constants/colors';
import products from '../utils/constants/products';

import OrderHistoryItem from '../components/OrderHistoryItem';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {listMyOrders} from '../redux/actions/orderActions';

const OrdersHistory = ({navigation}) => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const orderListMyOrders = useSelector(state => state.orderListMyOrders);
  const {
    loading: loadingOrders,
    error: errorOrders,
    orders,
  } = orderListMyOrders;

  const [noLogin, setNoLogin] = useState(false);

  useEffect(() => {
    if (!userInfo) {
      setNoLogin(true);
    } else {
      setNoLogin(false);
      dispatch(listMyOrders());
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (errorOrders) {
      Alert.alert('Error', errorOrders);
    }
  }, [errorOrders]);

  const handleOrderDetail = orderID => {
    navigation.navigate('OrderHistory', (orderID = orderID));
  };

  return noLogin ? (
    <>
      <View style={style.viewNoLoginContainer}>
        <Text style={style.titleNoLogin}>
          Want to see your orders history? Then
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login', (redirect = 'Orders'))}>
          <View style={style.viewNoLogin}>
            <Text style={style.textNoLogin}>SIGN UP/ SIGN IN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  ) : (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>My Orders</Text>
      </View>
      {loadingOrders && <Loader />}
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={orders}
        scrollEnabled={true}
        removeClippedSubviews={true}
        onEndReachedThreshold={1}
        scrollEventThrottle={250}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={200}
        initialNumToRender={10}
        snapToAlignment="center"
        decelerationRate={'fast'}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <OrderHistoryItem item={item} handleOrderDetail={handleOrderDetail} />
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    alignSelf: 'center',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewNoLoginContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 200,
  },
  titleNoLogin: {
    color: COLORS.primary,
    fontSize: 20,
  },
  textNoLogin: {
    fontSize: 16,
    color: COLORS.white,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  viewNoLogin: {
    marginTop: 50,
    height: 50,
    width: 200,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OrdersHistory;
