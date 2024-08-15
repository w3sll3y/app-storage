import { Platform } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const CardSection = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 25px;
  justify-content: space-between;
`;

export const OptionCardSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PriceResume = styled.Text``;

export const Price = styled.Text`
  color: red;
  font-weight: 700;
`;

export const Label = styled.Text`
  margin-left: 5px;
`;

export const TotalContainer = styled.View`
  background-color: white;
  margin: 25px 25px 15px 25px;
  width: 90%;
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