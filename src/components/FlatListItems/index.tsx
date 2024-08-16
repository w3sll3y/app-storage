import { formatPrice } from '@/utils/formatPrice';
import { useState } from 'react';
import { FlatList } from 'react-native';
import Modal from "react-native-modal";
import ItemModal from '../ItemModal';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ItemProp } from '@/types/item';
import * as Styled from './styles';
import { cartStorage } from '@/storage/cart';

type ItemsListProps = {
  items: ItemProp[];
  search?: string;
};

export function FlatListItems({ items, search = "" }: ItemsListProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isModalFull, setIsModalFull] = useState(false);
  const [data, setData] = useState<ItemProp>();

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  function onOpenModal(item: ItemProp, isFull: boolean) {
    setData(item);
    setIsModalFull(isFull);
    setModalVisible(true);
  }

  function truncateTitle(title: string, maxLength: number) {
    return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
  }

  async function handleAddItem(item: ItemProp) {
    await cartStorage.save(item, 1);
  }

  async function handleCloseModal(value: boolean) {
    setModalVisible(value)
  }

  return (
    <>
      <FlatList
        data={filteredItems}
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
                    <Styled.AddItemButton onPress={() => handleAddItem(item)}>
                      <FontAwesome5 name="plus" size={12} color="white" />
                    </Styled.AddItemButton>
                  </Styled.ItemRowContainer>
                  {filteredItems[index + 1] && (
                    <Styled.ItemRowContainer
                      onPress={() => onOpenModal(filteredItems[index + 1], false)}
                    >
                      <Styled.ContainerStyledRowImage>
                        <Styled.StyledRowImage
                          source={{
                            uri: filteredItems[index + 1].thumbnailHd
                          }}
                        />
                      </Styled.ContainerStyledRowImage>
                      <Styled.TitleContainer>
                        <Styled.Title>{truncateTitle(filteredItems[index + 1].title, 15)}</Styled.Title>
                        <Styled.Price>{formatPrice(filteredItems[index + 1].price)}</Styled.Price>
                      </Styled.TitleContainer>
                      <Styled.AddItemButton onPress={() => handleAddItem(filteredItems[index + 1])}>
                        <FontAwesome5 name="plus" size={12} color="white" />
                      </Styled.AddItemButton>
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
                    <Styled.AddItemButton onPress={() => handleAddItem(item)}>
                      <FontAwesome5 name="plus" size={12} color="white" />
                    </Styled.AddItemButton>
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
          handleCloseModal={handleCloseModal}
        />
      </Modal>
    </>
  );
}

