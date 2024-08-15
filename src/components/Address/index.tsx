import * as Styled from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Address() {
  return (
    <Styled.Container>
      <Styled.TitleContainer>
        <Styled.Title>
          Endereço
        </Styled.Title>
        <Styled.Text>Rua sao martins, 79</Styled.Text>
        <Styled.Text>CENTRO, Joao Pessoa / PB</Styled.Text>
      </Styled.TitleContainer>
      <Styled.Button>
        <MaterialIcons name="navigate-next" size={48} color="black" />
      </Styled.Button>
    </Styled.Container>
  )
}