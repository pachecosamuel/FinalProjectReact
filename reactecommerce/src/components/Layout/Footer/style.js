import React from "react";
import styled from "styled-components";

export const Caixa = styled.div`
  padding: 10px;
  background: #000000;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: 1.5rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`

export const Texto = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`

export const Paragrafo = styled.a`
  color: aliceblue;
  margin-bottom: 5px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #985e6d;
    transform: scale(105%);
  }
`

export const Cabecalho = styled.p`
  font-size: 18px;
  color: aliceblue;
  margin-bottom: 10px;
  font-weight: bold;
`