import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, FlatList} from 'react-native';
import COLORS from '../utils/constants/colors';
import products from '../utils/constants/products';
import OrderHistoryItem from '../components/OrderHistoryItem';

const Cart = ({navigation}) => {
  const onPress = () => {
    navigation.navigate('Order');
  };

  const handleOrderDetail = () => {
    navigation.navigate('Order', {history: true});
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.title}>My Orders</Text>
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
});

export default Cart;
