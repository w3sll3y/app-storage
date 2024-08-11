import React from 'react';
import * as Styled from './styles';

import { TextInputProps } from 'react-native';

type InputPros = TextInputProps & {
  label: string;
  type: 'default' | 'email-address' | 'visible-password';
  isPassword?: boolean;
}

const Input: React.FC<InputPros> = ({ label, isPassword = false, type = "default", ...rest }) => {
  return (
    <Styled.InputContainer>
      <Styled.Label>
        {label}
      </Styled.Label>
      <Styled.Input
        keyboardType={type}
        secureTextEntry={isPassword}
        {...rest}
      />
    </Styled.InputContainer>
  )
}

export default Input;