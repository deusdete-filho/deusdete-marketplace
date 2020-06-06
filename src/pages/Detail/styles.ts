import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  border-radius: 5px;
  margin-top: 60px;
  flex: 1;
  flex-direction: row;
`;

export const Product = styled.View`
  align-items: center;
  background: #fff;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex: 1;
`;

export const ProductImage = styled.Image`
  height: 300px;
  width: 300px;
`;

export const ProductTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  margin-top: auto;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #3253ad;
  padding: 20px;
`;

export const ProductButton = styled.TouchableOpacity`
  align-items: center;
  background: #3253ad;
  padding: 16px 16px;
  border-radius: 5px;
  margin: 8px;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin-left: 15px;
`;
