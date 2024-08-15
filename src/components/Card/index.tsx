import { InputCep } from '@/styles/cart';
import * as Styled from './style';

export default function Card() {
  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Styled.NameInput
          placeholder='Nome Completo'
          placeholderTextColor='white'
        />
      </Styled.NameContainer>
      <Styled.NumberContainer>
        <Styled.Section style={{ marginLeft: 15 }}>
          <Styled.Label>VALID THRU</Styled.Label>
          <Styled.InputDate
            maxLength={5}
            placeholder='MM/AA'
          />
        </Styled.Section>
        <Styled.Section>
          <Styled.CardData
            maxLength={4}
            placeholder='XXXX'
          />
          <Styled.CardData
            maxLength={4}
            placeholder='XXXX'
          />
          <Styled.CardData
            maxLength={4}
            placeholder='XXXX'
          />
          <Styled.CardData
            maxLength={4}
            placeholder='XXXX'
          />
          <Styled.SectionCode>
            <Styled.Label>cvv</Styled.Label>
            <Styled.InputCode
              maxLength={3}
              placeholder='XXX'
            />
          </Styled.SectionCode>
        </Styled.Section>
      </Styled.NumberContainer>
    </Styled.Container>
  )
}