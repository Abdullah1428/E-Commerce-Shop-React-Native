import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../utils/constants/colors';

import PlaceOrderItem from '../components/PlaceOrderItem';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {getOrderDetails} from '../redux/actions/orderActions';
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from '../redux/constants/orderConstants';

const Order = ({navigation, route}) => {
  const orderID = route.params;

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);
  const {userInfo} = userLogin;

  const orderDetails = useSelector(state => state.orderDetails);
  const {loading, error, order} = orderDetails;

  const orderPay = useSelector(state => state.orderPay);
  const {loading: loadingPay, success: successPay} = orderPay;

  const orderDeliver = useSelector(state => state.orderDeliver);
  const {loading: loadingDeliver, success: successDeliver} = orderDeliver;

  useEffect(() => {
    if (!userInfo) {
      navigation.navigate('Login');
    }

    if (!order || successPay || successDeliver) {
      dispatch({type: ORDER_PAY_RESET});
      dispatch({type: ORDER_DELIVER_RESET});
      dispatch(getOrderDetails(orderID));
    }
  }, [dispatch, orderID, successPay, order, successDeliver, userInfo]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <SafeAreaView style={style.container}>
      {history && (
        <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      )}
      <View style={style.shippingAddressContainer}>
        <Text style={style.orderID}>Order ID: {order._id}</Text>
        <Text style={style.title}>Name</Text>
        <Text style={style.para}>{order.user.name}</Text>
        <Text style={style.title}>Email</Text>
        <Text style={style.para}>{order.user.email}</Text>
        <Text style={style.title}>Shipping Address</Text>
        <Text numberOfLines={2} style={style.para}>
          * {order.shippingAddress.address}, {order.shippingAddress.city}
          {order.shippingAddress.postalCode},{order.shippingAddress.country}
        </Text>
        {order.isDelivered ? (
          <View style={style.deliverBlockSuccess}>
            <Text style={style.deliverText}>
              Delivered on {order.deliveredAt}
            </Text>
          </View>
        ) : (
          <View style={style.deliverBlock}>
            <Text style={style.deliverText}>Not Delivered</Text>
          </View>
        )}
      </View>
      <View style={style.paymentContainer}>
        <Text style={style.title}>Payment Method</Text>
        <Text numberOfLines={1} style={style.para}>
          * Method : {order.paymentMethod}
        </Text>
        {order.isPaid ? (
          <View style={style.deliverBlockSuccess}>
            <Text style={style.deliverText}>Paid on {order.paidAt}</Text>
          </View>
        ) : (
          <View style={style.deliverBlock}>
            <Text style={style.deliverText}>Not Paid</Text>
          </View>
        )}
      </View>
      <View style={style.paymentContainer}>
        <Text style={style.title}>Your Order</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
          backgroundColor: COLORS.white,
        }}
        data={order.orderItems}
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
        renderItem={({item}) => <PlaceOrderItem item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <Text style={style.summaryTitle}>Order Summary</Text>
            <View style={style.summary}>
              <Text style={style.summaryText}>Items</Text>
              <Text style={style.summaryText}>${order.itemsPrice}</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Shipping</Text>
              <Text style={style.summaryText}>${order.shippingPrice}</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Tax</Text>
              <Text style={style.summaryText}>${order.taxPrice}</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Total</Text>
              <Text style={style.summaryText}>${order.totalPrice}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  shippingAddressContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  paymentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  orderID: {
    fontSize: 16,
    color: COLORS.dark,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    color: COLORS.dark,
    paddingBottom: 10,
    fontWeight: 'bold',
  },
  para: {
    fontSize: 15,
    color: COLORS.dark,
    paddingBottom: 10,
    marginLeft: 5,
  },
  deliverBlock: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#d0f0c0', // #ffcccb
    justifyContent: 'center',
  },
  deliverBlockSuccess: {
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffcccb', // #ffcccb
    justifyContent: 'center',
  },
  deliverText: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.dark,
  },
  summaryTitle: {
    fontSize: 20,
    color: COLORS.dark,
    alignSelf: 'center',
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
});

export default Order;
