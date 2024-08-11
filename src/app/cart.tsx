import { useState } from "react";

import * as Styled from '../styles/cart';
import Header from "@/components/Header";

export default function Cart() {
  const [user, setUser] = useState(false);

  return (
    <>
      {
        !user ? (
          <Styled.Container>
            <Header
              hasBack
              title="Carrinho"
            />
            <Styled.ContainerBody>
              <Styled.Title>
                Seu carrinho está vazio
              </Styled.Title>
            </Styled.ContainerBody>
          </Styled.Container>
        ) : null
      }
    </>
  )
}