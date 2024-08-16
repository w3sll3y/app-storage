import { useCallback, useState } from "react";
import * as Styled from '../styles/cart';
import Header from "@/components/Header";
import { cartStorage } from "@/storage/cart";
import { router, useFocusEffect } from "expo-router";
import { FlatList } from "react-native";
import { formatPrice } from "@/utils/formatPrice";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Button from "@/components/Button";
import { userStorage } from "@/storage/user";
import { ItemProp } from "@/types/item";

export default function Cart() {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState<string | null>();
  const [data, setData] = useState<ItemProp[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  async function getItems() {
    const items = await cartStorage.get();
    setData(items || []);
  }

  async function plusItems(id: number, quantity: number) {
    await cartStorage.update(id, quantity);
    return getItems();
  }

  async function lessItems(id: number, quantity: number) {
    if (quantity < 1) {
      await cartStorage.remove(id);
      return getItems();
    }
    else if (quantity >= 1) {
      await cartStorage.update(id, quantity);
      return getItems();
    }
    return getItems();
  }

  async function calTotalPrice() {
    const total = data.reduce((accumulator, item) => {
      const itemTotal = item.price * (item.quantity || 1);
      return accumulator + itemTotal;
    }, 0);

    setTotalPrice(total);
  }

  async function getToken() {
    const token = await userStorage.get();
    setToken(token);
    if (!!token) {
      setUser(true)
    }
  }

  async function handleNextStep() {
    if (token !== null) {
      return router.navigate('/checkout')
    } else if (token === null) {
      return router.navigate('/login')
    }
  }

  useFocusEffect(
    useCallback(() => {
      getItems();
      getToken();
    }, [])
  );

  useFocusEffect(
    useCallback(() => {
      calTotalPrice();
    }, [data])
  );
  return (
    <>
      <Styled.Container>
        <Header
          hasBack
          title="Carrinho"
        />
        {data.length > 0 && (
          <>
            <Styled.ContainerList>
              <FlatList<ItemProp>
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Styled.ItemContainer>
                    <Styled.ImageContainer>
                      <Styled.ImageItem
                        source={{ uri: item.thumbnailHd }}
                      />
                    </Styled.ImageContainer>
                    <Styled.TextContainer>
                      <Styled.Title>
                        {item.title}
                      </Styled.Title>
                      <Styled.Price style={{ marginBottom: 15 }}>
                        {formatPrice(item.price)}
                      </Styled.Price>
                      <Styled.Text>
                        Vendedor: {item.seller}
                      </Styled.Text>
                      <Styled.Text>
                        Cep: {item.zipcode}
                      </Styled.Text>
                      <Styled.Quantity>
                        <FontAwesome6 onPress={() => lessItems(item.id, item.quantity - 1)} name="minus-square" size={16} color="black" /> {item.quantity} <FontAwesome6 onPress={() => plusItems(item.id, item.quantity + 1)} name="square-plus" size={16} color="black" />
                      </Styled.Quantity>
                    </Styled.TextContainer>
                  </Styled.ItemContainer>

                )}
              />
            </Styled.ContainerList>
            <Styled.CepContainer>
              <Styled.Label>Cep</Styled.Label>
              <Styled.InputCep
                keyboardType="numeric"
                placeholder="XXXXX-XXX"
              />
            </Styled.CepContainer>
            <Styled.TotalContainer>
              <Styled.PriceContainer>
                <Styled.Label>Subtotal</Styled.Label>
                <Styled.PriceResume>{formatPrice(totalPrice)}</Styled.PriceResume>
              </Styled.PriceContainer>
              <Styled.PriceContainer style={{ marginTop: 10 }}>
                <Styled.Label>Frete</Styled.Label>
                <Styled.PriceResume>{formatPrice(0)}</Styled.PriceResume>
              </Styled.PriceContainer>
              <Styled.Hr />
              <Styled.PriceContainer>
                <Styled.Label>Total</Styled.Label>
                <Styled.Price>{formatPrice(totalPrice)}</Styled.Price>
              </Styled.PriceContainer>
            </Styled.TotalContainer>
            <Button
              title="Ir para o pagamento"
              type="primary"
              onPress={handleNextStep}
            />
          </>
        )
        }
        {data.length === 0 && (
          <Styled.ContainerEmpty>
            <Styled.Text>
              Seu carrinho está vazio
            </Styled.Text>
          </Styled.ContainerEmpty>
        )
        }
      </Styled.Container>
    </>
  );
}
