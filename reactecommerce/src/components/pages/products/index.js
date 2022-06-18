// A ideia dessa página é consumir os recursos
// que a API irá disponibilizar. Esse nome
// é fictício e temporário.

import React, { useEffect, useState } from "react";
import { ObterProdutos } from "../../Services/api-produto";
import { Container, ApiListWrapper, ContainerCard } from "./style";
import { v4 as uuidv4 } from "uuid";

export const ProdutoApi = () => {

    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
        ObterProdutos().then((res) => setProdutos(res.data))
    }, []);

    if (produtos.length < 1) {
        return (
            <>
            </>
        );
    } else {
        return (
            <Container>
                <ApiListWrapper>
                    {produtos.map((item) => {
                        return (
                            <ContainerCard key={item.id}>
                                <h2>{item.nomeProduto}</h2>
                                <p>{item.descricaoProduto}</p>
                            </ContainerCard>
                        )
                    })}
                </ApiListWrapper>
            </Container>
        )
    }
}
