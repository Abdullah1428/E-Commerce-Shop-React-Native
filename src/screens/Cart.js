import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import COLORS from '../utils/constants/colors';
import products from '../utils/constants/products';
import CartItem from '../components/CartItem';
import {PrimaryButton} from '../components/Button';

const Cart = ({navigation}) => {
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
        renderItem={({item}) => <CartItem item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="Proceed to Checkout" />
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
});

export default Cart;
