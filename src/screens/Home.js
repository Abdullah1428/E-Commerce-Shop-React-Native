import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/constants/colors';
import products from '../utils/constants/products';

import ProductCard from '../components/ProductCard';

const Home = ({navigation}) => {
  const handleProduct = product => {
    navigation.navigate('Product', product);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome To</Text>
          <Text style={styles.appName}>Food King</Text>
        </View>
        <AntDesign
          onPress={() => navigation.navigate('Cart')}
          name={'shoppingcart'}
          size={28}
          color={COLORS.tomato}
        />
      </View>
      <View style={styles.searchArea}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={25} style={{marginLeft: 20}} />
          <TextInput placeholder="Search Product..." style={styles.input} />
        </View>
        <View style={styles.sortBtn}>
          <AntDesign name="check" size={20} color={COLORS.white} />
        </View>
      </View>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 10,
          paddingBottom: 50,
        }}
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
        numColumns={2}
        data={products}
        renderItem={({item}) => {
          return <ProductCard product={item} handleProduct={handleProduct} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  welcome: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  appName: {
    fontSize: 38,
    fontWeight: 'bold',
    color: COLORS.tomato,
  },
  searchArea: {
    marginTop: 30,
    flexDirection: 'row',
  },
  searchContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    color: COLORS.dark,
  },
  sortBtn: {
    marginLeft: 10,
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default Home;
