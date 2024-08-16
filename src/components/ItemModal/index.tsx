
import { cartStorage } from '@/storage/cart';
import { formatPrice } from '@/utils/formatPrice';
import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import * as Styled from './styles';

type ItemModalProps = {
  date?: string;
  price?: number;
  seller?: string;
  thumbnailHd?: string;
  title?: string;
  zipcode?: string;
  isModalFull?: boolean;
  handleCloseModal: (value: boolean) => void;
}

const ItemModal: React.FC<ItemModalProps> = ({
  date,
  price,
  seller,
  thumbnailHd,
  title,
  zipcode,
  isModalFull,
  handleCloseModal
}) => {
  const [quantity, setQuantity] = useState(1);

  async function plusItems(quantity: number) {
    return setQuantity(quantity)
  }

  async function lessItems(quantity: number) {
    if (quantity >= 1) {
      return setQuantity(quantity)
    }
    return
  }

  async function handleSetItem() {
    const item = {
      date: date ?? '',
      price: price ?? 0,
      seller: seller ?? '',
      thumbnailHd: thumbnailHd ?? '',
      title: title ?? '',
      zipcode: zipcode ?? '',
      isModalFull: isModalFull ?? false,
    }

    cartStorage.save(item, quantity);
    handleCloseModal(false)
  }

  return (
    <>
      {
        !isModalFull ? (
          <Styled.Modal>
            <Styled.SectionImage>
              <Styled.Image
                source={{ uri: thumbnailHd }}
              />
            </Styled.SectionImage>
            <Styled.SectionText>
              <Styled.Title>
                {title}
              </Styled.Title>
              <Styled.Text>Data: {date}</Styled.Text>
              <Styled.Text>Vendedor: {seller}</Styled.Text>
              <Styled.Text>Cep: {zipcode}</Styled.Text>
              <Styled.Price style={{ marginTop: 10 }} >{formatPrice(Number(price))}</Styled.Price>
              <Styled.Quantity style={{ marginTop: 10 }}>
                <FontAwesome6 onPress={() => lessItems(quantity - 1)} name="minus-square" size={16} color="black" /> {quantity} <FontAwesome6 onPress={() => plusItems(quantity + 1)} name="square-plus" size={16} color="black" />
              </Styled.Quantity>
              <Styled.Button
                onPress={handleSetItem}
              >
                <Styled.TextButton>
                  Adicionar ao carrinho
                </Styled.TextButton>
              </Styled.Button>
            </Styled.SectionText>
          </Styled.Modal>
        ) : (
          <Styled.ModalFull>
            <Styled.SectionImageCol>
              <Styled.ImageCol
                source={{ uri: thumbnailHd }}
              />
            </Styled.SectionImageCol>
            <Styled.SectionTextCol>
              <Styled.Section>
                <Styled.Title>
                  {title}
                </Styled.Title>
                <Styled.Text>Data: {date}</Styled.Text>
                <Styled.Text>Vendedor: {seller}</Styled.Text>
                <Styled.Text>Cep: {zipcode}</Styled.Text>
              </Styled.Section>
              <Styled.SectionPrice>
                <Styled.Price>{formatPrice(Number(price))}</Styled.Price>
                <Styled.Quantity>
                  <FontAwesome6 onPress={() => lessItems(quantity - 1)} name="minus-square" size={16} color="black" /> {quantity} <FontAwesome6 onPress={() => plusItems(quantity + 1)} name="square-plus" size={16} color="black" />
                </Styled.Quantity>
                <Styled.Button
                  style={{ marginTop: 15 }}
                  onPress={handleSetItem}
                >
                  <Styled.TextButton>
                    Adicionar ao carrinho
                  </Styled.TextButton>
                </Styled.Button>
              </Styled.SectionPrice>
            </Styled.SectionTextCol>
          </Styled.ModalFull>
        )
      }
    </>
  )
}

export default ItemModal;
