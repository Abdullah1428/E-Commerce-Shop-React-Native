import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import COLORS from '../utils/constants/colors';
import CartItem from '../components/CartItem';
import Message from '../components/Message';
import {PrimaryButton} from '../components/Button';

import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const Cart = ({navigation}) => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);

  const {cartItems} = cart;

  const onPress = () => {
    navigation.navigate('Login', (redirect = 'Shipping'));
  };

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  const addToCartHandler = (value, id) => {
    dispatch(addToCart(id, Number(value)));
  };

  const handleProduct = id => {
    navigation.navigate('CartProduct', (id = id));
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Shopping Cart</Text>
      </View>
      {cartItems.length === 0 ? (
        <Message>Your Cart is Empty</Message>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          data={cartItems}
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
            <CartItem
              item={item}
              addToCartHandler={addToCartHandler}
              removeFromCartHandler={removeFromCartHandler}
              handleProduct={handleProduct}
            />
          )}
          ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
          ListFooterComponent={() => (
            <View>
              <View style={style.summary}>
                <Text style={style.summaryText}>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) Items
                </Text>
                <Text style={style.summaryText}>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </Text>
              </View>
              <View style={{marginTop: 20}}>
                <PrimaryButton title="Proceed to Checkout" onPress={onPress} />
              </View>
            </View>
          )}
        />
      )}
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
});

export default Cart;
