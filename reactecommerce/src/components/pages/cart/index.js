import React from 'react'
import { Href, Btn, MainContainer, SuperContainer, InsideContainer, Left, Right, Logo, PageTitle, RightTop, RightBottom, Product, ProductName, ProductImage, ProductValue, InputQty, LabelInputQty } from './style'

import logo from "../../../img/logo/logo.png";

export function Cart() {

  const { userInput, setUserInput } = React.useState(1)

  function handleChange(e) {
    setUserInput(e.target.value)
  }

  function handleClear() {
    
  }

  if (0 < 1) {
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
                  <ProductImage src={logo}/>
                  <ProductName>Produto Teste</ProductName>
                  <ProductValue>Valor: R$50,00</ProductValue>
                  <LabelInputQty>Qtd: </LabelInputQty>
                  <InputQty onChange={handleChange} value={userInput}/>
                  <ProductValue>Total: {50*userInput}</ProductValue>
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
