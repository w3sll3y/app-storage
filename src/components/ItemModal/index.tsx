
import { formatPrice } from '@/utils/formatPrice';
import * as Styled from './styles';

type ItemModalProps = {
  date?: string;
  price?: number;
  seller?: string;
  thumbnailHd?: string;
  title?: string;
  zipcode?: string;
  isModalFull?: boolean;
}

const ItemModal: React.FC<ItemModalProps> = ({
  date,
  price,
  seller,
  thumbnailHd,
  title,
  zipcode,
  isModalFull
}) => {
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
              <Styled.Price>{formatPrice(Number(price))}</Styled.Price>
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
              <Styled.Section>
                <Styled.Price>{formatPrice(Number(price))}</Styled.Price>
              </Styled.Section>
            </Styled.SectionTextCol>
          </Styled.ModalFull>
        )
      }
    </>
  )
}

export default ItemModal;
