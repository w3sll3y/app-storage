import styled from "styled-components/native";
import { Platform } from "react-native";
export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ContainerBody = styled.SafeAreaView`
  margin-top: 15px;
  align-items: center;
  width: 100%;
`;

export const ItemContainer = styled.TouchableOpacity`
  width: 350px;
  height: 100px;
  background-color: white;
  position: relative;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0 10px;
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
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Text = styled.Text``;

export const ContainerIcon = styled.View`
  position: absolute;
  right: 5px;
`;