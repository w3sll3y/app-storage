import Address from '@/components/Address';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Header from '@/components/Header';
import { UserServer } from '@/server/user-server';
import { cartStorage } from '@/storage/cart';
import * as Styled from '@/styles/checkout';
import { formatPrice } from '@/utils/formatPrice';
import { FontAwesome6 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ItemProp } from "@/types/item";
import { ToastMessage } from '@/utils/toastMessages';

type CardProp = {
  number: string;
  name: string;
  dueDate: string;
  code: string;
};

type ItemSell = {
  price: number;
  seller: string;
  thumbnailHd: string;
  title: string;
};

export default function Checkout() {
  const [data, setData] = useState<ItemProp[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [code, setCode] = useState('');

  async function getItems() {
    const items = await cartStorage.get();
    setData(items || []);
  }

  async function handleName(name: string) {
    setName(name)
  }

  async function handleNumber(number: string) {
    setNumber(number)
  }

  async function handleDueDate(dueDate: string) {
    setDueDate(dueDate)
  }

  async function handleCode(code: string) {
    setCode(code)
  }

  async function handleSubmitPayment() {
    const items: ItemSell[] = [];
    const total = totalPrice;
    const card: CardProp = {
      name,
      code,
      dueDate,
      number,
    };

    data.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        const newItem = {
          title: item.title,
          price: item.price,
          seller: item.seller,
          thumbnailHd: item.thumbnailHd,
        };
        items.push(newItem);
      }
    });

    if (name === "" || code === "" || dueDate === "" || number.length < 12) {
      return ToastMessage.errorToast(
        'Algo deu errado.😔',
        `Preencha todos os campos do cartão`
      )
    }

    const purchase = await UserServer.handlePurchase({ items, ...card, total });
    if (purchase.id) {
      cartStorage.clear();
      router.navigate(`/order/${purchase.id}`);
      ToastMessage.successToast(
        'Pedido efetuado com sucesso!🎉',
        'Veja os detalhes'
      )
      return purchase;
    }
    return purchase;
  }

  useFocusEffect(
    useCallback(() => {
      getItems();
    }, [])
  );

  useEffect(() => {
    calTotalPrice();
  }, [data]);

  async function calTotalPrice() {
    const total = data.reduce((accumulator, item) => {
      const itemTotal = item.price * (item.quantity || 1);
      return accumulator + itemTotal;
    }, 0);
    setTotalPrice(total);
  }

  return (
    <>
      <Header
        title='Pagamento'
        hasBack
      />
      <ScrollView>
        <Styled.Container>
          <Card
            number={number}
            name={name}
            dueDate={dueDate}
            code={code}
            handleName={handleName}
            handleNumber={handleNumber}
            handleDueDate={handleDueDate}
            handleCode={handleCode}
          />
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
          style={{ marginBottom: 10 }}
          title='Confirmar pagamento'
          type='primary'
          onPress={handleSubmitPayment}
        />
      </ScrollView>
    </>
  );
}
