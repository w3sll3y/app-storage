import Header from '@/components/Header';
import * as Styled from '../styles/signup';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { router } from 'expo-router';
import { UserServer } from '@/server/user-server';
import { useState } from 'react';
import { ToastMessage } from '@/utils/toastMessages';

export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleGoLogin() {
    router.navigate('/login');
  }

  async function handleDoSignUp() {
    const data = await UserServer.handleSingUp({ name, email, password });
    if (data.id) {
      ToastMessage.successToast(
        'Bem-Vindo!',
        'Cadastro feito com sucesso!'
      )
      setName('');
      setEmail('');
      setPassword('');
      router.navigate('/login');
    }
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
          value={name}
          onChangeText={newName => setName(newName)}
        />
        <Input
          label='Email'
          autoCapitalize='none'
          type='email-address'
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
        />
        <Input
          label='Senha'
          type='default'
          autoCapitalize='none'
          isPassword
          value={password}
          onChangeText={newPassword => setPassword(newPassword)}
        />
        <Button
          type='primary'
          title="Cadastrar"
          onPress={handleDoSignUp}
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