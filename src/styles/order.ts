import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerBody = styled.View`
  margin: 25px;
  background-color: white;
  max-height: 50%;
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

export const ImageContainer = styled.View``;

export const Image = styled.Image`
  width: 150px;
  height: 150px;

  border-radius: 10px;
  object-fit: cover;
`;

export const TextContainer = styled.View`
  padding: 15px 15px 0 15px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  padding: 10px;
`;


export const Title = styled.Text`
  font-weight: 600;
  max-width: 150px;
`;

export const Text = styled.Text`  
  max-width: 150px;
`;

export const Price = styled.Text`  
  max-width: 150px;
  font-weight: 600;
  color: red;
  margin-bottom: 15px;
`;

export const TotalContainer = styled.View`
  max-width: 100%;
  height: 100px;
  background-color: white;
  justify-content: space-between;
  border-radius: 10px;
  margin: 15px 25px;
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

export const TotalTitle = styled.Text`
  font-weight: 700;
  font-size: 18px;
`;

export const PriceTotal = styled.Text`  
  max-width: 150px;
  font-weight: 600;
  color: red;
`;

export const TotalSection = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;