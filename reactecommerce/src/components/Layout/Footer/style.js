import React from "react";
import styled from "styled-components";

export const Caixa = styled.div `
  padding: 10px 10px;
  background: #192231;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`


export const Texto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;
`

export const Paragrafo = styled.a`
  color: aliceblue;
  margin-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
  &:hover {
    color: #985e6d;
    transform: scale(110%);
  }
`

export const Cabecalho = styled.p`
  font-size: 18px;
  color: aliceblue;
  margin-bottom: 10px;
  font-weight: bold;
`