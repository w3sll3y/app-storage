import Address from '@/components/Address';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { cartStorage } from '@/storage/cart';
import * as Styled from '@/styles/checkout';
import { formatPrice } from '@/utils/formatPrice';
import { FontAwesome6 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

type ItemProp = {
  id: number;
  date: string;
  price: number;
  seller: string;
  thumbnailHd: string;
  title: string;
  zipcode: string;
  quantity: number;
};

export default function Checkout() {
  const [data, setData] = useState<ItemProp[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  async function getItems() {
    const items = await cartStorage.get();
    setData(items || []);
  }

  async function calTotalPrice() {
    const total = data.reduce((accumulator, item) => {
      const itemTotal = item.price * (item.quantity || 1);
      return accumulator + itemTotal;
    }, 0);

    setTotalPrice(total);
  }

  useFocusEffect(
    useCallback(() => {
      getItems();
      calTotalPrice();
    }, [])
  );

  return (
    <>
      <Header
        title='Pagamento'
        hasBack
      />
      <ScrollView>
        <Styled.Container>
          <Card />
          <Styled.CardSection>
            <Styled.OptionCardSection>
              <FontAwesome name="plus-square" size={16} color="black" />
              <Styled.Label>Cadastrar Cartão</Styled.Label>
            </Styled.OptionCardSection>
            <Styled.OptionCardSection>
              <FontAwesome6 name="wallet" size={16} color="black" />
              <Styled.Label>Trocar Cartão</Styled.Label>
            </Styled.OptionCardSection>
          </Styled.CardSection>

          <Address />

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
              <Styled.Label>Total </Styled.Label>
              <Styled.Price>{formatPrice(totalPrice)}</Styled.Price>
            </Styled.PriceContainer>
          </Styled.TotalContainer>
        </Styled.Container>
        <Button
          title='Confirmar pagamento'
          type='primary'
        />
      </ScrollView>
    </>
  )
}