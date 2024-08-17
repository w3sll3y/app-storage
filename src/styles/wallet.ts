import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCard = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const CardView = styled.View`
  height: 150px;
  width: 250px;
  margin: 0 20px 20px;
  padding: 15px;
  background-color: #3F3F3F;
  border-radius: 10px;
  justify-content: space-evenly;
  
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

export const Title = styled.Text`
  font-size: 18px;
  color: white;
  font-weight: 600;
`;

export const Text = styled.Text`
  color: white;
  font-weight: 600;
  `;