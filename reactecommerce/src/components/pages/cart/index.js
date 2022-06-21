import React from 'react'
import { Href, Btn, FinishOrder, MainContainer, SuperContainer, InsideContainer, Left, Right, Logo, PageTitle, RightTop, RightBottom, Product, ProductName, ProductImage, ProductValue, InputQty, LabelInputQty, ProductRemove } from './style'

import logo from "../../../img/logo/logo.png";
import { FaTrash } from "react-icons/fa";

export function Cart() {

  function handleClear() {
    
  }

  function handleRemove() {

  }

  function handleFinish() {
    
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
                  <ProductValue><b>Valor:</b> <i>R$50,00</i></ProductValue>
                  <ProductValue><b>Total:</b> <i>R${50*1},00</i></ProductValue>
                  <ProductRemove onClick={handleRemove}><FaTrash/></ProductRemove>
                </Product>
              </RightTop>
              <RightBottom>
                  <FinishOrder onClick={handleFinish}>Finalizar Pedido</FinishOrder>
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
