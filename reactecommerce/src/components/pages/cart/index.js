import React from 'react'
import { ContextData } from "../../context/data"
import { Href, Btn, MainContainer, SuperContainer, InsideContainer, Left, Right, Logo, PageTitle, RightTop, RightBottom, Product } from './style'

import logo from "../../../img/logo/logo.png";

export function Cart() {
  const { cartState, setCartState } = React.useContext(ContextData)

  function handleClear() {
    setCartState([])
  }

  if (cartState.length < 1) {
    return (
      <MainContainer>
        <SuperContainer>
          <InsideContainer>
            <Left>
              <Href href="http://localhost:3000/">
                <Logo src={logo}/>
              </Href>
              <PageTitle>Saturno Geek</PageTitle>
              <Btn onClick={handleClear}>Limpar o carrinho</Btn>
              <Href href="http://localhost:3000/produtos">
                <Btn>Voltar</Btn>
              </Href>
            </Left>
            <Right>
              <RightTop>
                <Product>

                </Product>
              </RightTop>
              <RightBottom>

              </RightBottom>
            </Right>
          </InsideContainer>
        </SuperContainer>
      </MainContainer>
    )
  } else {
    return (
      <MainContainer>

      </MainContainer>
    )
  }
}
