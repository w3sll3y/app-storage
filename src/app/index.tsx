import HomeHeader from '@/components/HomeHeader';
import { ItemsServer } from '@/server/items-server';
import { useEffect, useState } from 'react';
import * as Styled from '../styles/home';
import { FlatListItems } from '@/components/FlatListItems';

type ItemProp = {
  date: string;
  price: number;
  seller: string;
  thumbnailHd: string;
  title: string;
  zipcode: string;
};

export default function Index() {
  const [items, setItems] = useState<ItemProp[]>();

  async function getItems() {
    const data = await ItemsServer.handleGetItemsData();
    setItems(data);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Styled.Container>
      <HomeHeader />
      {items && <FlatListItems items={items} />}
    </Styled.Container>
  );
}
