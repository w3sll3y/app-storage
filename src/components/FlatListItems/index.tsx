import { formatPrice } from '@/utils/formatPrice';
import { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import * as Styled from './styles';
import Modal from "react-native-modal";
import ItemModal from '../ItemModal';

type ItemProp = {
  date: string;
  price: number;
  seller: string;
  thumbnailHd: string;
  title: string;
  zipcode: string;
};

type ItemsListProps = {
  items: ItemProp[];
};

export function FlatListItems({ items }: ItemsListProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalFull, setIsModalFull] = useState(false);
  const [data, setData] = useState<ItemProp>();

  function onCloseModal() {
    setModalVisible(false)
  }

  function onOpenModal(item: ItemProp, isFull: boolean) {
    setData(item);
    setIsModalFull(isFull);
    setModalVisible(true)
  }
  function truncateTitle(title: string, maxLength: number) {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  }

  return (
    <>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: { item: ItemProp; index: number }) => {
          const isFirstOrThirdInGroup = index % 3 === 0;
          const isSingleItem = (index + 1) % 3 === 0;

          return (
            <>
              {isFirstOrThirdInGroup && !isSingleItem ? (
                <Styled.RowContainer>
                  <Styled.ItemRowContainer
                    onPress={() => onOpenModal(item, false)}
                  >
                    <Styled.ContainerStyledRowImage>
                      <Styled.StyledRowImage
                        source={{
                          uri: item.thumbnailHd
                        }}
                      />
                    </Styled.ContainerStyledRowImage>
                    <Styled.TitleContainer>
                      <Styled.Title>{truncateTitle(item.title, 15)}</Styled.Title>
                      <Styled.Price>{formatPrice(item.price)}</Styled.Price>
                    </Styled.TitleContainer>
                  </Styled.ItemRowContainer>
                  {items[index + 1] && (
                    <Styled.ItemRowContainer
                      onPress={() => onOpenModal(items[index + 1], false)}
                    >
                      <Styled.ContainerStyledRowImage>
                        <Styled.StyledRowImage
                          source={{
                            uri: items[index + 1].thumbnailHd
                          }}
                        />
                      </Styled.ContainerStyledRowImage>
                      <Styled.TitleContainer>
                        <Styled.Title>{truncateTitle(items[index + 1].title, 15)}</Styled.Title>
                        <Styled.Price>{formatPrice(items[index + 1].price)}</Styled.Price>
                      </Styled.TitleContainer>
                    </Styled.ItemRowContainer>
                  )}
                </Styled.RowContainer>
              ) : isSingleItem ? (
                <Styled.ColContainer>
                  <Styled.ItemColContainer
                    onPress={() => onOpenModal(item, true)}
                  >
                    <Styled.ContainerStyledRowImage>
                      <Styled.StyledColImage
                        source={{
                          uri: item.thumbnailHd
                        }}
                      />
                    </Styled.ContainerStyledRowImage>
                    <Styled.TitleContainer>
                      <Styled.Title>{truncateTitle(item.title, 15)}</Styled.Title>
                      <Styled.Price>{formatPrice(item.price)}</Styled.Price>
                    </Styled.TitleContainer>
                  </Styled.ItemColContainer>
                </Styled.ColContainer>
              ) : null}
            </>
          );
        }}
      />

      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <ItemModal
          zipcode={data?.zipcode}
          date={data?.date}
          price={data?.price}
          seller={data?.seller}
          thumbnailHd={data?.thumbnailHd}
          title={data?.title}
          isModalFull={isModalFull}
        />
      </Modal>
    </>
  );
}
