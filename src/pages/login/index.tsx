import Header from '@/components/Header';
import * as Styled from './styles';
import Input from '@/components/Input';

export default function LoginPage() {
  return (
    <Styled.Container>
      <Header
        title='Login'
      />
      <Styled.ContainerInput>
        <Input
          label='Email'
          type='default'
        />
        <Input
          label='Senha'
          type='default'
          isPassword
        />
      </Styled.ContainerInput>
    </Styled.Container>
  )
}