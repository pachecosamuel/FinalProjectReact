import React from "react";
import styled from "styled-components";

export const Caixa = styled.div`
  padding: 10px 10px;
  background: #000000;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  /* border: 4px solid tomato; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
  margin-left: 40px;
  word-break: break-word;
  cursor: pointer;

  /* width: 100%; */
  /* border: 4px solid yellow; */
`


export const Texto = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 50px;
`

export const Paragrafo = styled.a`
  color: aliceblue;
  margin-bottom: 5px;
  font-size: 1rem;
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