import HomeHeader from '@/components/HomeHeader';
import * as Styled from '../styles/home';
import { useCallback, useEffect, useState } from 'react';
import { ItemsProp, ItemsServer } from '@/server/items-server';
import { useFocusEffect } from 'expo-router';

export default function Index() {
  const [items, setItems] = useState<ItemsProp[]>();

  async function getItems() {
    const data = await ItemsServer.handleGetItemsData();
    console.log('data22222', data)
    setItems([data]);
  }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <Styled.Container>
      <HomeHeader />
    </Styled.Container>
  );
}
