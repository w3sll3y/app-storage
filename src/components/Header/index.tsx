import * as Styled from './styles';

type TitleProps = {
  title: string;
}

const Header: React.FC<TitleProps> = ({ title }) => {
  return (
    <Styled.Header>
      <Styled.Title>
        {title}
      </Styled.Title>
    </Styled.Header>
  )
}

export default Header;