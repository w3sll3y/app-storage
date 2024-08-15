import styled from "styled-components/native";
import { Platform } from 'react-native';

export const Container = styled.View`
  background-color: #3F3F3F;
  border-radius: 15px;
  margin-top: 25px;
  width: 90%;
  height: 230px;

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

export const NameContainer = styled.View`
  height: 100px;
  width: 100%;
  justify-content: center;
  padding-left: 5%;
`;

export const NameInput = styled.TextInput`
  font-size: 20px;
  color: white;
  max-width: 270px;
`;

export const NumberContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
`;

export const Label = styled.Text`
  color: white;
  max-width: 40px;
  font-size: 12px;
`;

export const Section = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const InputDate = styled.TextInput`
  background-color: #f5f5f5;
  border-radius: 5px;
  height: 30px;
  margin-left: 10px;
  text-align: center;
  font-size: 12px;
  width: 60px;
`;

export const CardData = styled.TextInput`
  background-color: #f5f5f5;
  border-radius: 5px;
  height: 30px;
  margin-left: 15px;
  text-align: center;
  font-size: 12px;
  width: 50px;
`;

export const SectionCode = styled.View`
  flex-direction: column;
  margin-top: -12px;
  align-items: start;
  flex: 1;
  padding-left: 20px;
  width: 100%;
`;

export const CodeData = styled.TextInput`
  flex-direction: row;
`;

export const InputCode = styled.TextInput`
  background-color: #f5f5f5;
  border-radius: 5px;
  height: 25px;
  text-align: center;
  font-size: 12px;
  width: 60px;
`;