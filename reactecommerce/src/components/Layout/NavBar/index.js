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

export const NavBar = () => {

  const [show, setShow] = useState("0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow("-4000px"); // Scroll down = esconde a navbar
      } else {
        setShow("0"); // Scroll up = mostra a navbar
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
    <MainContainer active={`${show}`}>
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
            <Href href="/produtos">Produtos</Href>
          </Item>
          <Item>
            <Href href="/sobre">Sobre</Href>
          </Item>
          <Item>
            <Href href="/login">Login</Href>
          </Item>
        </Lista>
      </ContainerRefs>
    </MainContainer>
  );
};
