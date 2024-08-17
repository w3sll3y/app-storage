import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Header from "@/components/Header";
import { CardsServer } from "@/server/wallet-server";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import * as Styled from '@/styles/wallet';
import { FlatList } from "react-native-gesture-handler";

type CardProps = {
  id?: number;
  createdBy: string;
  number: string;
  name: string;
  dueDate: string;
  code: string;
  userId?: number;
}

export default function Wallet() {
  const [cards, setCards] = useState<CardProps[]>([]);

  async function getCards() {
    const data = await CardsServer.handleGetCardsData();

    const uniqueCards = data.filter((card: CardProps, index: number, self: any) =>
      index === self.findIndex((c: any) => (
        c.number === card.number && c.dueDate === card.dueDate
      ))
    );

    setCards(uniqueCards);
  }

  useFocusEffect(
    useCallback(() => {
      getCards();
    }, [])
  )

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Header
        title="Carteira"
        hasBack
      />
      <Styled.Container>
        <Styled.ContainerCard>
          <FlatList
            data={cards}
            keyExtractor={(item) => `${item.number}-${item.dueDate}`}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Styled.CardView>
                <Styled.Title>{item.name}</Styled.Title>
                <Styled.Text>{item.number}</Styled.Text>
                <Styled.Text>{item.dueDate}</Styled.Text>
              </Styled.CardView>
            )}
          />
        </Styled.ContainerCard>
      </Styled.Container>
    </GestureHandlerRootView>
  )
}
