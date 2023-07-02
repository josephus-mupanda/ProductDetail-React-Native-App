import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const ProductDetailScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [buttonScale] = useState(new Animated.Value(1));

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Add to cart logic here
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./path/to/product-image.jpg')}
        style={styles.image}
      />
      <Text style={styles.description}>
        This is the product description.
      </Text>
      <Text style={styles.price}>$29.99</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleQuantityDecrease}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={handleQuantityIncrease}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
        activeOpacity={0.8}
      >
        <Animated.Text
          style={[
            styles.addToCartButtonText,
            { transform: [{ scale: buttonScale }] },
          ]}
        >
          Add to Cart
        </Animated.Text>
      </TouchableOpacity>

      {/* Product options can be added here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#DDDDDD',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  addToCartButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductDetailScreen;

