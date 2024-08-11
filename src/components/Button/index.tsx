import { TouchableOpacityProps } from 'react-native';
import * as Styed from './styles';

type ButtonProps = TouchableOpacityProps & {
  type: 'primary' | 'secondary' | 'tertiary';
  title: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'primary', title, ...rest }) => {
  return (
    <Styed.Container>
      <Styed.Button
        type={type}
        {...rest}
      >
        <Styed.Text
          type={type}
        >
          {title}
        </Styed.Text>
      </Styed.Button>
    </Styed.Container>
  )
}

export default Button;