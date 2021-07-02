import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../utils/constants/colors';
import {PrimaryButton} from '../components/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import PlaceOrderItem from '../components/PlaceOrderItem';

import products from '../utils/constants/products';

const PlaceOrder = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Order');
  };

  const handleNav = nav => {
    navigation.navigate(nav);
  };

  return (
    <SafeAreaView style={style.container}>
      <Icon name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <CheckoutSteps step1 step2 step3 step4 handleNav={handleNav} />
      <View style={style.shippingAddressContainer}>
        <Text style={style.title}>Shipping Address</Text>
        <Text numberOfLines={2} style={style.para}>
          * Address city postal code country
        </Text>
      </View>
      <View style={style.paymentContainer}>
        <Text style={style.title}>Payment Method</Text>
        <Text numberOfLines={1} style={style.para}>
          * Cash
        </Text>
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
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="Place Order" onPress={onPress} />
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

export default PlaceOrder;
