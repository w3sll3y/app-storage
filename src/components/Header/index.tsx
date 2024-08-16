import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

import * as Styled from './styles';

type TitleProps = {
  hasBack?: boolean;
  title: string;
}

const Header: React.FC<TitleProps> = ({ hasBack, title }) => {
  const navigate = useNavigation();

  async function handleGoBack() {
    navigate.goBack();
  }
  return (
    <Styled.Header>
      {
        hasBack && (
          <Styled.BackButton
            onPress={handleGoBack}
          >
            <FontAwesome6 name="arrow-left-long" size={24} color="black" />
          </Styled.BackButton>
        )
      }
      <Styled.Title>
        {title}
      </Styled.Title>
    </Styled.Header>
  )
}

export default Header;