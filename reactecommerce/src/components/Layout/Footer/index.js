import React from "react";
import { Caixa, Container, Column, Texto, Paragrafo, Cabecalho } from "./style";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaTeamspeak } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export const Footer = () => {

  return (
    <Caixa>
      <Container>
        <Texto>
          <Column>
            <Cabecalho>Contato</Cabecalho>
            <Paragrafo>(24)2222-0000 <BsTelephoneForward /></Paragrafo>
            <Paragrafo>saturnogeek@gmail.com <AiOutlineMail /> </Paragrafo>
          </Column>
          <Column>
            <Cabecalho>Atendimento ao cliente</Cabecalho>
            <Paragrafo>Fale conosco <FaTeamspeak /></Paragrafo>
            <Paragrafo>Perguntas frequentes <AiOutlineQuestionCircle /> </Paragrafo>
          </Column>
          <Column>
            <Cabecalho>Redes Sociais</Cabecalho>
            <Paragrafo href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook <FaFacebook /></span>
              </i>
            </Paragrafo>
            <Paragrafo href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram <FaInstagram /></span>
              </i>
            </Paragrafo>
            <Paragrafo href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Linkedin <FaLinkedin /></span>
              </i>
            </Paragrafo>
          </Column>
          <Column>
            <Cabecalho>Horário de funcionamento</Cabecalho>
            <Paragrafo>Seg-Sex 09:00 - 18:00 <FiClock /></Paragrafo>
          </Column>
        </Texto>
      </Container>
    </Caixa>
  );
}