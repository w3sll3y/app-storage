import Button from '@/components/Button';
import Header from '@/components/Header';
import Input from '@/components/Input';
import { UserServer } from '@/server/user-server';
import { userStorage } from '@/storage/user';
import { router } from 'expo-router';
import { useState } from 'react';
import * as Styled from '../styles/login';

export default function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleGoSignUp() {
    router.navigate('/signup');
  }

  async function handleDoLogin() {
    const access_token = await UserServer.handleLogin({ email, password });
    if (access_token) {
      await userStorage.save(String(access_token));
      router.navigate('/');
      setEmail('');
      setPassword('');
    }
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