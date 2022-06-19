import React from "react";
import { Caixa, Container, Column, Texto, Paragrafo, Cabecalho } from "./style";


export const Footer = () => {

    return (
        <Caixa>
            <Container>
        <Texto>
          <Column>
            <Cabecalho>Contato</Cabecalho>
            <Paragrafo>(24)2222-0000</Paragrafo>
            <Paragrafo>saturnogeek@gmail.com</Paragrafo>
          </Column>
          <Column>
            <Cabecalho>Atendimento ao cliente</Cabecalho>
            <Paragrafo>Fale conosco</Paragrafo>
            <Paragrafo>Perguntas frequentes</Paragrafo>
          </Column>
          <Column>
            <Cabecalho>Redes Sociais</Cabecalho>
            <Paragrafo href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </Paragrafo>
            <Paragrafo href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </Paragrafo>
          </Column>
          <Column>
            <Cabecalho>Horário de funcionamento</Cabecalho>
            <Paragrafo>Todos os dias 00:00 - 00:00</Paragrafo>
          </Column>
        </Texto>
      </Container>
        </Caixa>
    );
}