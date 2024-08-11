import { FontAwesome5 } from '@expo/vector-icons';
import * as Styled from './styles';

const HomeHeader: React.FC = () => {
  return (
    <Styled.Header>
      <Styled.Title>
        STAR STORE
      </Styled.Title>
      <Styled.InputContainer>
        <FontAwesome5
          size={18} name="search" color="#c3c3c3"
        />
        <Styled.Input
          placeholder='O que você procura?'
        >
        </Styled.Input>
      </Styled.InputContainer>
    </Styled.Header>
  )
}

export default HomeHeader;