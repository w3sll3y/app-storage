import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import * as Styled from '../styles/login';
import { router } from 'expo-router';
import { useState } from 'react';
import { UserServer } from '@/server/user-server';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleGoSignUp() {
    router.navigate('/signup');
  }

  async function handleDoLogin() {
    const token = await UserServer.handleLogin({ email, password });
    console.log('token', token)
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
          autoCapitalize='none'
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
        />
        <Input
          label='Senha'
          type='default'
          isPassword
          autoCapitalize='none'
          value={password}
          onChangeText={newPassword => setPassword(newPassword)}
        />
        <Button
          type='primary'
          title="Fazer Login"
          onPress={handleDoLogin}
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