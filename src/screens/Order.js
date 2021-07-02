import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import COLORS from '../utils/constants/colors';
import PlaceOrderItem from '../components/PlaceOrderItem';

import products from '../utils/constants/products';

const Order = ({navigation}) => {
  const onPress = () => {
    // handle on press
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.shippingAddressContainer}>
        <Text style={style.orderID}>Order ID: 232432534353523532452352</Text>
        <Text style={style.title}>Shipping Address</Text>
        <Text numberOfLines={2} style={style.para}>
          * Address city postal code country
        </Text>
        <View style={style.deliverBlock}>
          <Text style={style.deliverText}>Not Delivered</Text>
        </View>
      </View>
      <View style={style.paymentContainer}>
        <Text style={style.title}>Payment Method</Text>
        <Text numberOfLines={1} style={style.para}>
          * Cash
        </Text>
        <View style={style.deliverBlock}>
          <Text style={style.deliverText}>Not Paid</Text>
        </View>
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
        data={products}
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
              <Text style={style.summaryText}>$50</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Shipping</Text>
              <Text style={style.summaryText}>$50</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Tax</Text>
              <Text style={style.summaryText}>$50</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Total</Text>
              <Text style={style.summaryText}>$50</Text>
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
