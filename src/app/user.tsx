import Header from '@/components/Header';
import { UserServer } from '@/server/user-server';
import * as Styled from '@/styles/user';
import { FontAwesome6 } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';

export type User = {
  id: string;
  email: string;
  name: string;
}

export default function User() {
  const [user, setUser] = useState<User>();

  async function getUser() {
    const data = await UserServer.handleGetUserData();
    console.log('heee', data);
    setUser(data);
  }

  useFocusEffect(
    useCallback(() => {
      getUser();
    }, [])
  )
  return (
    <>
      <Header
        title='Usuário'
        hasBack
      />
      <Styled.Container>
        <Styled.ContainerProfile>
          <FontAwesome6 size={120} name="user-large" color="#c3c3c3" />
        </Styled.ContainerProfile>
        <Styled.Title>
          {user?.name}
        </Styled.Title>
      </Styled.Container>
    </>
  )
} 