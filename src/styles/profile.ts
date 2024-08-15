import styled from "styled-components/native";
import { Platform } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ContainerTitle = styled.View``;

export const ContainerBody = styled.SafeAreaView`
  margin-top: 25px;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 18px;
`;

export const ContainerButtons = styled.View`
  height: 250px;
  width: 90%;
  background-color: white;
  border-radius: 10px;

  margin: 0 0 25px 0;
  padding: 25px;

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

export const Button = styled.TouchableOpacity`
  width: 100%;
  margin: 0 0 25px 0;
`;

export const LoggoutButton = styled.TouchableOpacity`
  width: 90%;
  background-color: white;
  padding: 15px 25px;
  position: absolute;

  bottom: 20px;
  
  justify-content: center;
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

export const LoggoutText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`;

export const LoggoutIcon = styled.View`
  position: absolute;
  right: 20px;
`;