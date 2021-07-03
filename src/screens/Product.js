import React, {useState} from 'react';
import {LOCAL_SERVER_URL} from '@env';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from '../utils/constants/colors';
import Rating from '../components/Rating';

const Product = ({navigation, route}) => {
  const product = route.params;

  const [qty, setqty] = useState(1);
  const [userRating, setUserRating] = useState(1);

  const handleQty = param => {
    if (param === 'neg') {
      if (qty !== 1) {
        setqty(qty - 1);
      }
    } else if (param === 'pos') {
      setqty(qty + 1);
    }
  };

  const handleRatingByUser = param => {
    if (param === 'neg') {
      if (userRating !== 1) {
        setUserRating(userRating - 1);
      }
    } else if (param === 'pos') {
      if (userRating !== 5) {
        setUserRating(userRating + 1);
      }
    }
  };

  const reviews = [
    {
      _id: '1',
      name: 'john',
      rating: '5',
      createdAt: '2021-5-7',
      comment: 'Nice product khan',
    },
    {
      _id: '1',
      name: 'john',
      rating: '5',
      createdAt: '2021-5-7',
      comment: 'Nice product khan',
    },
    {
      _id: '2',
      name: 'john',
      rating: '5',
      createdAt: '2021-5-7',
      comment: 'Nice product khan',
    },
    {
      _id: '3',
      name: 'john',
      rating: '5',
      createdAt: '2021-5-7',
      comment: 'Nice product khan',
    },
    {
      _id: '4',
      name: 'john',
      rating: '5',
      createdAt: '2021-5-7',
      comment: 'Nice product khan',
    },
    {
      _id: '5',
      name: 'john',
      rating: '5',
      createdAt: '2021-5-7',
      comment: 'Nice product khan',
    },
  ];

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        //columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 0,
          paddingBottom: 50,
        }}
        scrollEnabled={true}
        keyExtractor={(_, index) => index.toString()}
        data={reviews}
        renderItem={({item}) => {
          return (
            <View style={style.reviewBox}>
              <View style={style.reviewTop}>
                <Text>{item.name}</Text>
                <Text>{item.createdAt}</Text>
              </View>

              <View style={{marginLeft: 15}}>
                <Rating value={item.rating} />
              </View>

              <Text style={style.comment}>{item.comment}</Text>
            </View>
          );
        }}
        ListFooterComponentStyle={{
          marginTop: 10,
        }}
        ListHeaderComponent={() => (
          <View>
            <View style={style.header}>
              <Icon
                name="arrow-back"
                size={28}
                onPress={() => navigation.goBack()}
              />
              <AntDesign
                onPress={() => navigation.navigate('Cart')}
                name={'shoppingcart'}
                size={28}
                color={COLORS.tomato}
              />
            </View>
            <View style={style.imageContainer}>
              <Image
                source={{uri: `${LOCAL_SERVER_URL}${product.image}`}}
                style={style.imageStyle}
              />
            </View>
            <View style={style.detailsContainer}>
              <View style={style.ratingContainer}>
                <Rating value={product.rating} />
                <View style={style.addToCart}>
                  <Text style={style.buyText}>
                    {product.numReviews} reviews
                  </Text>
                </View>
              </View>
              <Text style={style.category}>{product.category}</Text>
              <View style={style.productNamePrice}>
                <Text style={style.name}>{product.name}</Text>
                <View style={style.priceTag}>
                  <Text style={style.price}>${product.price}</Text>
                </View>
              </View>
              {product.countInStock > 0 ? (
                <View style={style.qtyBuy}>
                  <View style={style.qtyBuyContainer}>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => handleQty('neg')}>
                      <View style={style.borderBtn}>
                        <AntDesign
                          name={'minus'}
                          size={25}
                          color={COLORS.tomato}
                        />
                      </View>
                    </TouchableOpacity>
                    <Text style={style.qty}>{qty}</Text>
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => handleQty('pos')}>
                      <View style={style.borderBtn}>
                        <Ionicons
                          name={'add'}
                          size={25}
                          color={COLORS.tomato}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={style.addToCart}>
                      <Text style={style.buyText}>Add to Cart</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : (
                <Text style={style.outOfStock}>Out of Stock</Text>
              )}
              <View style={style.aboutContainer}>
                <Text style={style.aboutText}>About</Text>
                <Text style={style.productDes}>{product.description}</Text>
              </View>
            </View>
            <View style={style.reviewsContainer}>
              <Text style={style.reviewTitle}>Reviews</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => (
          <View style={style.reviewsContainer}>
            <Text style={style.reviewTitle}>Write a Customer Review</Text>
            <View style={style.chooseReviewContainer}>
              <View style={style.qtyBuyContainer}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => handleRatingByUser('neg')}>
                  <View style={style.borderBtn}>
                    <AntDesign name={'minus'} size={25} color={COLORS.tomato} />
                  </View>
                </TouchableOpacity>
                <Text style={style.qty}>{userRating}</Text>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => handleRatingByUser('pos')}>
                  <View style={style.borderBtn}>
                    <Ionicons name={'add'} size={25} color={COLORS.tomato} />
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity activeOpacity={0.5}>
                <View style={style.addToCart}>
                  <Text style={style.buyText}>Choose Rating</Text>
                </View>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder={'Write you comment'}
              placeholderTextColor={COLORS.dark}
              underlineColorAndroid={'transparent'}
              style={style.input}
              multiline={true}
              numberOfLines={3}
              editable
              maxLength={100}
            />

            <TouchableOpacity>
              <View style={style.submitReviewButton}>
                <Text style={style.submitReviewText}>Submit Review</Text>
              </View>
            </TouchableOpacity>
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
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 0.45,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    resizeMode: 'contain',
    flex: 1,
  },
  detailsContainer: {
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
    height: undefined,
  },
  ratingContainer: {
    marginLeft: 20,
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productNamePrice: {
    marginLeft: 20,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  price: {
    marginLeft: 15,
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  qtyBuy: {
    marginTop: 20,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qtyBuyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLORS.dark,
    marginBottom: 5,
    marginRight: 3,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  qty: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  buyBtn: {
    width: 120,
    height: 40,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  addToCart: {
    backgroundColor: COLORS.green,
    width: 120,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  buyText: {
    alignSelf: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  aboutContainer: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDes: {
    color: 'grey',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  category: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
  },
  outOfStock: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  reviewsContainer: {
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 10,
    paddingTop: 10,
    height: undefined,
  },
  reviewTitle: {
    paddingHorizontal: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  reviewBox: {
    height: undefined,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.light,
    backgroundColor: COLORS.light,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '96%',
    marginTop: 5,
  },
  reviewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  comment: {
    marginLeft: 15,
    width: '80%',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  chooseReviewContainer: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 30,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 1,
    color: COLORS.dark,
    marginLeft: 15,
    fontSize: 15,
    margin: 10,
  },
  submitReviewButton: {
    borderRadius: 20,
    height: 50,
    width: 150,
    backgroundColor: COLORS.primary,
    marginLeft: 15,
    marginBottom: 10,
    justifyContent: 'center',
  },
  submitReviewText: {
    alignSelf: 'center',
    fontSize: 16,
    color: COLORS.white,
  },
});

export default Product;
