import React, { useState } from 'react';
import * as Styled from './style';

type CardProps = {
  number: string;
  name: string;
  dueDate: string;
  code: string;
  handleNumber: (value: string) => void;
  handleName?: (value: string) => void;
  handleDueDate?: (value: string) => void;
  handleCode?: (value: string) => void;
};

const Card: React.FC<CardProps> = ({
  name,
  dueDate,
  code,
  handleNumber,
  handleName,
  handleDueDate,
  handleCode,
}) => {
  const [firstPart, setFirstPart] = useState('');
  const [secondPart, setSecondPart] = useState('');
  const [thirdPart, setThirdPart] = useState('');
  const [fourthPart, setFourthPart] = useState('');

  const updateNumber = (part: string, setPart: React.Dispatch<React.SetStateAction<string>>) => (value: string) => {
    setPart(value);
    handleNumber(`${firstPart}${secondPart}${thirdPart}${fourthPart}`);
  };

  return (
    <Styled.Container>
      <Styled.NameContainer>
        <Styled.NameInput
          value={name}
          onChangeText={handleName}
          placeholder="Nome Completo"
          placeholderTextColor="white"
        />
      </Styled.NameContainer>
      <Styled.NumberContainer>
        <Styled.Section style={{ marginLeft: 15 }}>
          <Styled.Label>VALID THRU</Styled.Label>
          <Styled.InputDate
            value={dueDate}
            onChangeText={handleDueDate}
            maxLength={5}
            placeholder="MM/AA"
            keyboardType="numeric"
          />
        </Styled.Section>
        <Styled.Section>
          <Styled.CardData
            value={firstPart}
            maxLength={4}
            placeholder="XXXX"
            keyboardType="numeric"
            onChangeText={updateNumber(firstPart, setFirstPart)}
          />
          <Styled.CardData
            value={secondPart}
            maxLength={4}
            placeholder="XXXX"
            keyboardType="numeric"
            onChangeText={updateNumber(secondPart, setSecondPart)}
          />
          <Styled.CardData
            value={thirdPart}
            maxLength={4}
            placeholder="XXXX"
            keyboardType="numeric"
            onChangeText={updateNumber(thirdPart, setThirdPart)}
          />
          <Styled.CardData
            value={fourthPart}
            maxLength={4}
            placeholder="XXXX"
            keyboardType="numeric"
            onChangeText={updateNumber(fourthPart, setFourthPart)}
          />
          <Styled.SectionCode>
            <Styled.Label>cvv</Styled.Label>
            <Styled.InputCode
              maxLength={3}
              placeholder="XXX"
              keyboardType="numeric"
              value={code}
              onChangeText={handleCode}
            />
          </Styled.SectionCode>
        </Styled.Section>
      </Styled.NumberContainer>
    </Styled.Container>
  );
};

export default Card;
