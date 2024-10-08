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
import { addressStorage } from "@/storage/address";
import { ToastMessage } from "@/utils/toastMessages";

export default function Cart() {
  const [user, setUser] = useState(false);
  const [cep, setCep] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [data, setData] = useState<ItemProp[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cepError, setCepError] = useState<string | null>(null);

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
    } else if (quantity >= 1) {
      await cartStorage.update(id, quantity);
      return getItems();
    }
    return getItems();
  }

  async function handleCep(cep: string) {
    await addressStorage.saveCep(cep);
  }

  function formatCep(cep: string): string {
    const cleaned = cep.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{5})(\d{0,3})$/);
    if (match) {
      return `${match[1]}-${match[2]}`;
    }
    return cleaned;
  }

  function handleCepChange(newCep: string) {
    const formattedCep = formatCep(newCep);
    setCep(formattedCep);
    if (formattedCep.length === 9 && validateCep(formattedCep)) {
      setCepError(null);
    } else if (formattedCep.length > 9) {
      setCepError('Formato de CEP inválido. Use o formato 00000-000.');
    } else {
      setCepError(null);
    }
  }

  function validateCep(cep: string): boolean {
    const cepRegex = /^\d{5}-\d{3}$/;
    return cepRegex.test(cep);
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
    if (token) {
      setUser(true);
    }
  }

  async function handleNextStep() {
    if (cepError) {
      return ToastMessage.errorToast('Algo deu errado.😔', cepError);
    }
    if (cep.length < 9) {
      return ToastMessage.errorToast('Algo deu errado.😔', 'Preencha o CEP no formato válido');
    }
    if (token !== null) {
      await handleCep(cep);
      return router.navigate('/checkout');
    } else {
      return router.navigate('/login');
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
                maxLength={9}
                value={cep}
                onChangeText={handleCepChange}
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
        )}
        {data.length === 0 && (
          <Styled.ContainerEmpty>
            <Styled.Text>
              Seu carrinho está vazio
            </Styled.Text>
          </Styled.ContainerEmpty>
        )}
      </Styled.Container>
    </>
  );
}
