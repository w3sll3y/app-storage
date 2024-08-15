import { Platform } from 'react-native';
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerEmpty = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  max-width: 150px;
  font-weight: 500;
`;

export const Price = styled.Text`
  color: red;
  font-weight: 700;
`;

export const Text = styled.Text`
  margin: 1px 0;
  max-width: 150px;
`;

export const Quantity = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

export const ContainerList = styled.View`
  margin: 25px;
  background-color: white;
  max-height: 32%;
  border-radius: 10px;
  ${Platform.select({
  ios: `
        shadow-color: #000;
        shadow-offset: {width: 0px, height: 0px};
        shadow-opacity: 0.25;
        shadow-radius: 4px;
      `,
  android: `
        elevation: 5;
      `,
})}
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  width: 100%;
`;

export const ImageContainer = styled.View``;

export const ImageItem = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 10px;
`;

export const TextContainer = styled.View`
  padding: 0 10px;
`;

export const CepContainer = styled.View`
  background-color: white;
  margin: 0 25px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  ${Platform.select({
  ios: `
        shadow-color: #000;
        shadow-offset: {width: 0px, height: 0px};
        shadow-opacity: 0.25;
        shadow-radius: 4px;
      `,
  android: `
        elevation: 5;
      `,
})}
`;

export const Label = styled.Text`
  font-weight: 500;
`;

export const PriceResume = styled.Text``;


export const InputCep = styled.TextInput`
  background-color: #f5f5f5;
  width: 150px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const TotalContainer = styled.View`
  background-color: white;
  margin: 25px;
  border-radius: 10px;
  flex-direction: column;
  padding: 15px;
  ${Platform.select({
  ios: `
        shadow-color: #000;
        shadow-offset: {width: 0px, height: 0px};
        shadow-opacity: 0.25;
        shadow-radius: 4px;
      `,
  android: `
        elevation: 5;
      `,
})}
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Hr = styled.View`
  border: none;  
  height: 2px;  
  background-color: #ccc;  
  margin: 20px 0;   
  width: 100%; 
  border-radius: 5px; 
`;