import { FontAwesome5 } from '@expo/vector-icons';
import * as Styled from './styles';

type HomeProps = {
  search: string;
  handleSearch: (value: string) => void;
}

const HomeHeader: React.FC<HomeProps> = ({ search, handleSearch }) => {
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
          value={search}
          onChangeText={newSearch => handleSearch(newSearch)}
        >
        </Styled.Input>
      </Styled.InputContainer>
    </Styled.Header>
  )
}

export default HomeHeader;