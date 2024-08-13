import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View``;

export const ContainerBody = styled.FlatList`
  flex: 1;
`;

export const Title = styled.Text`
`;

export const ContainerInput = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #F5F5F5;
`;

export const RowContainer = styled.View`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between; /* Para garantir espaçamento entre os itens */
`;

export const ItemRowContainer = styled.View`
  flex: 1;
  background-color: red;
  margin: 2px;
`;

export const ColContainer = styled.View`
  height: 50px;
  width: 100%;
  margin: 2% 0; /* Ajuste de margem para espaçamento */
  flex-direction: column;
`;

export const ItemColContainer = styled.View`
  background-color: red;
`;