import styled from "styled-components/native";

export const Header = styled.View`
  background-color: white;
  top: 0;
  min-height: 200px;

  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 5%;
`;

export const InputContainer = styled.View`
  background-color: #F5F5F5;
  flex-direction: row;

  width: 85%;
  padding: 15px;

  border-radius: 8px;
  align-items: center;
`;


export const Input = styled.TextInput`
  margin-left: 10px;
  width: 90%;
`;