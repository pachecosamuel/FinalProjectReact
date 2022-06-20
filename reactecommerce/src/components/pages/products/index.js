// A ideia dessa página é consumir os recursos
// que a API irá disponibilizar. Esse nome
// é fictício e temporário.

import React, { useEffect } from "react";
import { ObterProdutos } from "../../services/api-produto";
import { Container, ApiListWrapper, ContainerCard } from "./style";
import { Consumo } from "./Consumo/"
import { AddCard } from "./AddCard/"


export const ProdutoApi = () => {
    const [produtos, setProdutos] = React.useState([]);

    useEffect(() => {
        ObterProdutos().then((res) => setProdutos(res.data))
    }, [])


    if (produtos.length < 1) {
        return (
            <Container>
                <ApiListWrapper>

                    {produtos?.map((item) => (
                        <Consumo
                            key={item.idProduto}
                            idProduto={item.idProduto}
                            nomeProduto={item.nomeProduto}
                            descricaoProduto={item.descricaoProduto}
                            caminhoImagem={item.caminhoImagem}
                        />
                    ))}

                    <AddCard />

                </ApiListWrapper>
            </Container>
        );
    } else {
        return (
            <Container>
                <ApiListWrapper>

                    {produtos?.map((item) => (
                        <Consumo
                            key={item.idProduto}
                            idProduto={item.idProduto}
                            nomeProduto={item.nomeProduto}
                            descricaoProduto={item.descricaoProduto}
                            caminhoImagem={item.caminhoImagem}
                        />
                    ))}

                    <AddCard />

                </ApiListWrapper>
            </Container>
        );
    }

}

/* 
import React from "react";
import { ObterProdutos } from "../../Services/api-produto";
import { Container, ApiListWrapper, ContainerCard } from "./style";
import { Consumo } from "./Consumo/"
import { AddCard } from "./AddCard/"

export const ProdutoApi = () => {

    const [produtos, setProdutos] = React.useState([]);

    React.useEffect(() => {
        ObterProdutos().then((res) => setProdutos(res.data))
    }, []);

    if (produtos.length < 1) {
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

                    <Consumo />

                    <AddCard />
                </ApiListWrapper>
            </Container>
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

                    <AddCard />
                </ApiListWrapper>
            </Container>
        )
    }
}
*/
