import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import * as Styled from '../styles/login';
import { router } from 'expo-router';

export default function LoginPage() {

  function handleGoSignUp() {
    router.navigate('/signup');
  }

  return (
    <Styled.Container>
      <Header
        title='Login'
      />
      <Styled.ContainerInput>
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
          title="Fazer Login"
        />
        <Button
          type='secondary'
          title="Criar uma conta"
          onPress={handleGoSignUp}
        />
      </Styled.ContainerInput>
    </Styled.Container>
  )
}