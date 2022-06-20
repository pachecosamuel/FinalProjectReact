import React from "react";
import { BannerContanier } from "./style";
import {
  Link
} from 'react-router-dom';

function Banner() {

  return (
    <BannerContanier>
      <div>
        <h2>PRODUTOS 100% ORIGINAIS PENSADOS EM VOCÊ!</h2>
        <h1>UMA LOJA PENSADA NA JORNADA DOS FÃNS!</h1>
        <p>CONECTE-SE AOS SEUS PERSONAGENS FAVORITOS.</p>
        <button type="button">
        <Link to = "/produtoapi" >ESTOU PRONTO!</Link>
        </button>
      </div>
    </BannerContanier>
  );
}

export default Banner;
