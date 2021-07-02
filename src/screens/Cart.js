import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import COLORS from '../utils/constants/colors';
import products from '../utils/constants/products';
import CartItem from '../components/CartItem';
import {PrimaryButton} from '../components/Button';

const Cart = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Shipping');
  };

  const [qty, setqty] = useState(1);

  const handleQty = param => {
    if (param === 'neg') {
      if (qty !== 0) {
        setqty(qty - 1);
      }
    } else if (param === 'pos') {
      setqty(qty + 1);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
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
        renderItem={({item}) => (
          <CartItem item={item} qty={qty} handleQty={handleQty} />
        )}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Subtotal Items</Text>
              <Text style={style.summaryText}>$50</Text>
            </View>
            <View style={style.summary}>
              <Text style={style.summaryText}>Total Price</Text>
              <Text style={style.summaryText}>$50</Text>
            </View>
            <View style={{marginTop: 20}}>
              <PrimaryButton title="Proceed to Checkout" onPress={onPress} />
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
