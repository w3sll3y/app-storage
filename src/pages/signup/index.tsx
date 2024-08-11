import Header from '@/components/Header';
import * as Styled from './styles';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function SignUp() {
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
        />
      </Styled.ContainerInput>
    </Styled.Container>
  )
}