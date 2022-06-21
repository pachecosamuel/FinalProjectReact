import React from "react";

import { AreaLogo, MarcasContanier, ImgQuadrinhos, ImgDc } from "./style";

import Quadrinhos from "./ImgMarcas/imgQuadrinhos.jpg";
import Dc from "./ImgMarcas/Dc-Collectibles.png";
import Banpresto from "./ImgMarcas/banpresto.png";
import Bandai from "./ImgMarcas/bandai.png";
import Hasbro from "./ImgMarcas/hasbro.png";
import Lego from "../../img/lego.jpg"
import Iron from "../../img/Iron.png"

function Marcas() {
  return (
    <>
      <MarcasContanier>
        <div>
          <ImgQuadrinhos src={Quadrinhos} />
        </div>

        <h2>ALGUMAS MARCAS TRABALHADAS:</h2>

        <AreaLogo>
          <ImgDc src={Dc} />
          <ImgDc src={Banpresto} />
          <ImgDc src={Bandai} />
          <ImgDc src={Hasbro} />
          <ImgDc src={Lego} />
          <ImgDc src={Iron} />
        </AreaLogo>

      </MarcasContanier>
    </>
  );
}

export default Marcas;
