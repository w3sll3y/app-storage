import Header from '@/components/Header';
import { PurchaseServer } from '@/server/purchases-server';
import * as Styled from '@/styles/history';
import { formatPrice } from '@/utils/formatPrice';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, router, useFocusEffect } from 'expo-router';
import { useState } from 'react';
import { FlatList } from 'react-native';

type PurchasesProp = {
  id: number;
  total: number;
  userId: number;
};

export default function History() {
  const [data, setData] = useState<PurchasesProp[]>([]);

  async function getPurchases() {
    try {
      const purchases = await PurchaseServer.handleGetPurchasesData();
      setData(purchases);
    } catch (error) {
      console.error('Error fetching purchases:', error);
    }
  }

  async function handleGoOrder(id: number) {
    router.navigate(`/myorders/${id}`);
  }

  useFocusEffect(
    () => {
      getPurchases();
    },
  );

  return (
    <>
      <Header
        title='Meus Pedidos'
        hasBack
      />
      <Styled.Container>
        <Styled.ContainerBody>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Styled.ItemContainer
                onPress={() => handleGoOrder(item.id)}
              >
                <Styled.Title>Pedido #{item.id}</Styled.Title>
                <Styled.Text>Valor: {formatPrice(item.total)}</Styled.Text>
                <Styled.Text>Status: Pedido confirmado</Styled.Text>
                <Styled.ContainerIcon>
                  <MaterialIcons name="navigate-next" size={48} color="black" />
                </Styled.ContainerIcon>
              </Styled.ItemContainer>
            )}
          />
        </Styled.ContainerBody>
      </Styled.Container>
    </>
  );
}
