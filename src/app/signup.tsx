import Header from '@/components/Header';
import * as Styled from '../styles/signup';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { router } from 'expo-router';

export default function SignUp() {

  function handleGoLogin() {
    router.navigate('/login');
  }

  return (
    <Styled.Container>
      <Header
        title='Cadastre-se'
      />
      <Styled.ContainerInput>
        <Input
          label='Nome'
          type='default'
        />
        <Input
          label='Email'
          type='email-address'
        />
        <Input
          label='Senha'
          type='default'
          isPassword
        />
        <Button
          type='primary'
          title="Cadastrar"
        />
        <Button
          type='secondary'
          title="Voltar ao Login"
          onPress={handleGoLogin}
        />
      </Styled.ContainerInput>
    </Styled.Container>
  )
}