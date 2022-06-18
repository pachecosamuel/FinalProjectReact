import React from "react";
import { Container, ButtonArea, Button } from "./style";

import { IoTrashBin, IoPencil } from "react-icons/io5"
import { FcMoneyTransfer } from "react-icons/fc"

export const Consumo = ({idProduto, nomeProduto, descricaoProduto, caminhoImagem}) => {

    return (
        <li>
            <Container>
                <h2>{nomeProduto}</h2>
                <p>{descricaoProduto}</p>
                <p>{caminhoImagem} <img src="https://static3.tcdn.com.br/img/img_prod/460977/funko_pop_stitch_super_sized_10_lilo_e_stitch_disney_1046_funko_92599_1_0e8a2bfb93ba54342c2be09048f36cbf.jpeg" alt="Little" width={100} height={100} /> </p>

                <ButtonArea>
                    <Button>
                        <FcMoneyTransfer />
                    </Button>
                    <Button>
                        <IoPencil />
                    </Button>
                    <Button>
                        <IoTrashBin />
                    </Button>
                </ButtonArea>


            </Container>
        </li>
    );
}