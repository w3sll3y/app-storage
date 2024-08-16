import HomeHeader from '@/components/HomeHeader';
import { ItemsServer } from '@/server/items-server';
import { useEffect, useState } from 'react';
import * as Styled from '../styles/home';
import { FlatListItems } from '@/components/FlatListItems';
import { ItemProp } from "@/types/item";

export default function Index() {
  const [items, setItems] = useState<ItemProp[]>();
  const [search, setSearch] = useState('');

  async function getItems() {
    const data = await ItemsServer.handleGetItemsData();
    setItems(data);
  }

  async function handleSearch(value: string) {
    setSearch(value);
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <Styled.Container>
      <HomeHeader
        search={search}
        handleSearch={handleSearch}
      />
      {items && <FlatListItems search={search} items={items} />}
    </Styled.Container>
  );
}
