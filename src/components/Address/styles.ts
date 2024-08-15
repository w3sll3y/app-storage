import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.View`
  width: 90%;
  border-radius: 10px;
  padding: 15px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;

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

export const TitleContainer = styled.View`

`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.Text``;

export const Button = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;
