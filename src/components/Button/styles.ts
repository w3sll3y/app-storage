import styled from "styled-components/native";

export const Container = styled.View`
   width: 100%;
   padding: 0 25px;
   margin: 2% 0;
`;

export const Button = styled.TouchableOpacity<{ type: 'primary' | 'secondary' | 'tertiary' }>`
  padding: 15px 25px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ type }) =>
    type === 'primary' ? '#1A1A1A' :
      type === 'secondary' ? '#F5F5F5' :
        type === 'tertiary' ? '#FFFFFF' : '#000'};  
`;

export const Text = styled.Text<{ type: 'primary' | 'secondary' | 'tertiary' }>`
  font-weight: 500;

  color: ${({ type }) =>
    type === 'primary' ? 'white' :
      type === 'secondary' ? '#1A1A1A' :
        type === 'tertiary' ? '#1A1A1A' : 'white'};  
`;