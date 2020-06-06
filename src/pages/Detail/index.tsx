import React, { useState, useEffect } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { View, Image, Text } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';
import { useCart } from '../../hooks/cart';
import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';

import {
  Container,
  ProductContainer,
  ProductImage,
  Product,
  ProductTitle,
  PriceContainer,
  TextButton,
  ProductPrice,
  ProductButton,
} from './styles';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
}
interface Params {
  id: number;
}

const Detail: React.FC = () => {
  const { addToCart } = useCart();

  const [products, setProducts] = useState<Product>({} as Product);
  const navigation = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get(`/products/${routeParams.id}`);
      setProducts(response.data);
    }

    loadProducts();
  }, [routeParams.id]);
  function handleAddToCart(products: Product): void {
    addToCart(products);
  }
  return (
    <Container>
      <ProductContainer>
        <Product>
          <ProductImage source={{ uri: products.image_url }} />
          <ProductTitle>{products.title}</ProductTitle>
          <>
            <ProductPrice>{formatValue(products.price)}</ProductPrice>
            <ProductButton
              testID={`add-to-cart-${products.id}`}
              onPress={() => handleAddToCart(products)}
            >
              <FeatherIcon size={20} name="plus" color="#fff" />
              <TextButton>Adicionar ao carrinho</TextButton>
            </ProductButton>
          </>
        </Product>
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Detail;
