import Header from "@/components/Header";
import { PurchaseServer } from "@/server/purchases-server";
import * as Styled from '@/styles/order';
import { ItemProp } from "@/types/item";
import { formatPrice } from "@/utils/formatPrice";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";

type ItemProps = {
  id: number;
  total: number;
  userId?: number;
  items: ItemProp[];
  zipcode: string;
};

type GroupedItem = ItemProp & { quantity: number };

const Order = () => {
  const { id } = useLocalSearchParams();

  const [data, setData] = useState<ItemProps>();

  async function getPurchases() {
    try {
      const purchases = await PurchaseServer.handleGetPurchaseById(Number(id));
      setData(purchases);
      console.log('Fetched data:', purchases);
    } catch (error) {
      console.error('Error fetching purchases:', error);
    }
  }

  useEffect(() => {
    getPurchases();
  }, [id]);

  const groupItemsByTitle = (items: ItemProp[]): GroupedItem[] => {
    const groupedItems: { [key: string]: GroupedItem } = {};

    items.forEach(item => {
      if (groupedItems[item.title]) {
        groupedItems[item.title].quantity += 1;
      } else {
        groupedItems[item.title] = { ...item, quantity: 1 };
      }
    });

    return Object.values(groupedItems);
  };

  const groupedItems = data?.items ? groupItemsByTitle(data.items) : [];

  return (
    <>
      <Styled.Container>
        <Header
          title={`Pedido`}
          hasBack
        />
        <Styled.ContainerBody>
          <FlatList
            data={groupedItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Styled.ItemContainer>
                <Styled.ImageContainer>
                  <Styled.Image
                    source={{ uri: item.thumbnailHd }}
                  />
                </Styled.ImageContainer>
                <Styled.TextContainer>
                  <Styled.Title>{item.title}</Styled.Title>
                  <Styled.Price>{formatPrice(item.price)}</Styled.Price>
                  <Styled.Text>Vendedor: {item.seller}</Styled.Text>
                  <Styled.Text>Cep: {data?.zipcode}</Styled.Text>
                  <Styled.Text>Quantidade: {item.quantity}</Styled.Text>
                </Styled.TextContainer>
              </Styled.ItemContainer>
            )}
          />
        </Styled.ContainerBody>

        <Styled.TotalContainer>
          <Styled.TotalTitle>
            Pedido Confirmado! {``}
            <FontAwesome name="check-square" size={18} color="black" />
          </Styled.TotalTitle>
          <Styled.TotalSection>
            <Styled.Title>Total</Styled.Title>
            <Styled.PriceTotal>{data?.total ? formatPrice(data?.total) : null}</Styled.PriceTotal>
          </Styled.TotalSection>
        </Styled.TotalContainer>
      </Styled.Container>
    </>
  );
}

export default Order;
