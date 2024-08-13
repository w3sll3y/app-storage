import styled from "styled-components/native";

export const Modal = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: white;
  height: 220px;
  border-radius: 10px;
`;

export const ModalFull = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 22px;
  background-color: white;
  height: 320px;
  border-radius: 10px;
`;

export const SectionImage = styled.View`
  flex: 1;
  height: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const SectionImageCol = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

export const ImageCol = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 15px;
  object-fit: cover;
`;

export const SectionText = styled.View`
  width: 150px;
  margin-top: 15px;
  padding: 0 5px;
  height: 100%;
`;

export const SectionTextCol = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  margin-top: 15px;
  padding: 0 10px;
  height: 100%;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
`;

export const Section = styled.View`
  flex: 1;
`;

export const Text = styled.Text`
  margin-top: 5px;
  font-size: 14px;
`;

export const Price = styled.Text`
  margin-top: 5px;
  color: red;
  font-weight: 700;
  font-size: 14px;
`;
