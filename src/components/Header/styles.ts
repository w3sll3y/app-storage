import styled from "styled-components/native";

export const Header = styled.View`
  background-color: white;
  position: relative;
  top: 0;

  width: 100%;
  min-height: 150px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 25px;
`;
