import React, { useState, useEffect } from "react";

import logo from "../../../img/logo/logo.png";

import {
  ContainerRefs,
  Item,
  Lista,
  MainContainer,
  ContainerLogo,
  Href,
  H1,
  Image,
} from "./styleNavBar";

import "./navbar.css";

export const NavBar = () => {

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(true); // Scroll down = esconde a navbar
      } else {
        setShow(false); // Scroll up = mostra a navbar
      }

      // Pra lembrar o último scroll
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Função que limpa, evitando loops
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <MainContainer className={`active ${show}`}>
      <ContainerLogo>
        <Href href="/">
          <Image src={logo} />
        </Href>
        <H1 href="/">Saturno Geek</H1>
      </ContainerLogo>
      <ContainerRefs>
        <Lista>
          <Item>
            <Href href="/">Home</Href>
          </Item>
          <Item>
            <Href href="/produtoapi">Produtos</Href>
          </Item>
          <Item>
            <Href href="/sobre">Sobre</Href>
          </Item>
        </Lista>
      </ContainerRefs>
    </MainContainer>
  );
};
