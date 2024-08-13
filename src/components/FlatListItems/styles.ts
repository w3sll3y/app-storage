import styled from "styled-components/native";
import { Platform } from 'react-native';

export const TitleContainer = styled.View`
  background-color: white;
  flex: 1;
  width: 100%;
  border-radius: 10px;
  padding: 5px 0 0 15px;
`;

export const Title = styled.Text`
  font-weight: 500;
`;

export const Price = styled.Text`
  color: red;
  font-weight: 500;
`;

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ItemRowContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 15px;
  min-height: 210px;
  min-width: 170px;
  max-width: 170px;
  align-items: center;
  margin: 30px 0;

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

export const ContainerStyledRowImage = styled.View`
  margin-top: 15px;
`;

export const StyledRowImage = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ColContainer = styled.View`
  width: 100%;
  flex-direction: column;
`;

export const ItemColContainer = styled.TouchableOpacity`
  background-color: white;
  border-radius: 15px;
  min-height: 200px;
  min-width: 150px;
  margin: 0 20px;
  align-items: center;

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

export const StyledColImage = styled.Image`
  width: 300px;
  height: 130px;
  border-radius: 10px;
  object-fit: cover;
`;