import React from "react";

import { MarcasContanier, ImgQuadrinhos, ImgDc, ImgBanpresto } from "./style";
import Quadrinhos from "./ImgMarcas/imgQuadrinhos.jpg";
import Dc from "./ImgMarcas/Dc-Collectibles.png";
import Banpresto from "./ImgMarcas/banpresto.png";
import Bandai from "./ImgMarcas/bandai.png";
import Hasbro from "./ImgMarcas/hasbro.png";
import IronStudio from "./ImgMarcas/ironStudio.png";

function Marcas() {
  return (
    <>
      <MarcasContanier>
        <div>
          <ImgQuadrinhos src={Quadrinhos} />
          <h2>ALGUMAS MARCAS TRABALHADAS:</h2>
          <ImgDc src={Dc} />
          <ImgBanpresto src={Banpresto} />
          <ImgDc src={Bandai} />
          <ImgDc src={Hasbro} />
          <ImgDc src={IronStudio} />
        </div>
      </MarcasContanier>
    </>
  );
}

export default Marcas;
