import React from "react";
import { BannerContanier } from "./style";
import { Link, useNavigate } from "react-router-dom";

function Banner() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/produtos");
  }

  return (
    <BannerContanier>
      <div>
        <h2>PRODUTOS 100% ORIGINAIS PENSADOS EM VOCÊ!</h2>
        <h1>UMA LOJA PENSADA NA JORNADA DOS FÃNS!</h1>
        <p>CONECTE-SE AOS SEUS PERSONAGENS FAVORITOS.</p>
        <button type="button" onClick={handleClick}>
          ESTOU PRONTO!
        </button>
      </div>
    </BannerContanier>
  );
}

export default Banner;
