import Octicons from '@expo/vector-icons/Octicons';
import { userStorage } from "@/storage/user";
import { useCallback, useState } from "react";
import LoginPage from "./login";
import Header from "@/components/Header";
import * as Styled from '@/styles/profile';
import { router, useFocusEffect } from "expo-router";
import { ToastMessage } from '@/utils/toastMessages';

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

  async function handleGoHistory() {
    router.navigate('/history')
  }

  async function handleGoProfile() {
    router.navigate('/user')
  }

  async function handleGoWallet() {
    router.navigate('/wallet')
  }

  async function handleGoAddress() {
    ToastMessage.errorToast('Ops! 😔', 'Esta função ainda está em desenvolvimento')
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
            />
            <Styled.ContainerBody>
              <Styled.ContainerButtons>
                <Styled.Button
                  onPress={handleGoProfile}
                >
                  <Styled.Title>
                    Editar Perfil
                  </Styled.Title>
                </Styled.Button>
                <Styled.Button
                  onPress={handleGoHistory}
                >
                  <Styled.Title>
                    Histórico de compras
                  </Styled.Title>
                </Styled.Button>
                <Styled.Button
                  onPress={handleGoWallet}
                >
                  <Styled.Title>
                    Carteira
                  </Styled.Title>
                </Styled.Button>
                <Styled.Button
                  onPress={handleGoAddress}
                >
                  <Styled.Title>
                    Endereços
                  </Styled.Title>
                </Styled.Button>
              </Styled.ContainerButtons>
            </Styled.ContainerBody>
            <Styled.LoggoutButton
              onPress={handleLogout}
            >
              <Styled.LoggoutText>
                Logout
              </Styled.LoggoutText>
              <Styled.LoggoutIcon>
                <Octicons name="sign-out" size={24} color="black" />
              </Styled.LoggoutIcon>
            </Styled.LoggoutButton>
          </Styled.Container>
      }
    </>
  )
}