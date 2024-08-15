import { userStorage } from "@/storage/user";
import { useCallback, useState } from "react";
import LoginPage from "./login";

import Button from "@/components/Button";
import Header from "@/components/Header";
import * as Styled from '@/styles/profile';
import { router, useFocusEffect } from "expo-router";

export default function Profile() {
  const [token, setToken] = useState<string | null>();
  const [user, setUser] = useState(false);

  async function getToken() {
    const token = await userStorage.get();
    setToken(token);
    if (!!token) {
      setUser(true)
    }
  }

  async function handleLogout() {
    await userStorage.remove();
    setUser(false)
    router.navigate('/');
  }

  useFocusEffect(
    useCallback(() => {
      getToken();
    }, [])
  )

  return (
    <>
      {
        !user ? (
          <LoginPage />
        ) :
          <Styled.Container>
            <Header
              title="Meu perfil"
              hasBack
            />
            <Styled.ContainerBody>
              <Styled.Title>
                Perfil
              </Styled.Title>
              <Button
                title="logout"
                type="tertiary"
                onPress={handleLogout}
              />
            </Styled.ContainerBody>
          </Styled.Container>
      }
    </>
  )
}