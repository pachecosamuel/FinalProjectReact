// A ideia dessa página é consumir os recursos
// que a API irá disponibilizar. Esse nome
// é fictício e temporário.

import React, { useEffect, useState } from "react";
import { AddCard } from "./AddCard"
import { Consumo } from "./Consumo"

import Api, { Apiecommerce } from "../../Services/Api"
import { ObterProdutos } from "../../Services/api-produto";


import { Container, ApiListWrapper, ContainerCard } from "./style";
import { ThemeConsumer } from "styled-components";

import { v4 as uuidv4 } from "uuid";

export const ProdutoApi = () => {

    //Maneira que está dando certo
    const [produtos, setProdutos] = useState( [] );

    // { ESTAVA DENTRO DO USO STATE
    //     nome: "",
    //     descricao: ""
    // }

    // Tentativa de pegar o objeto e desestruturar
    // em um array
    // const {arrayProdutos, setArrayProdutos} = useState([]);


    function createProdutos(response) {
        for (let i = 0; i < response.length; i++) {
            const e = response[i];
            produtos.push({ e, id: uuidv4 })
        }
    }


    useEffect(() => {

        // Maneira que está dando certo
        const getProduto = async () => {
            const response = await ObterProdutos()
            // console.log(response.data);
            createProdutos(response.data);


            // setArrayProdutos(response.data);
        }
        getProduto()
        console.log(produtos);


        //  Tentativa de alocar os dados em um array de objeto
        // Apiecommerce.get("produto").then( ({data}) => {
        //     setArrayProdutos(data.arrayProdutos);
        // } );
        // console.log(arrayProdutos);



        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    if (produtos === undefined) {
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
                            <ContainerCard key={item.produto.id}  >
                                <h2>{item.produto.nomeProduto}</h2>
                                <p>{item.produto.descricaoProduto}</p>
                            </ContainerCard>
                        )
                    }
                    )}

                    {/* <Consumo 
                    idProduto = {1}
                    nomeProduto = "Produto Fictício A23"
                    descricaoProduto = "O maior upgrade do sistema de câmera Pro até hoje. Tela Super Retina xdr com ProMotion."
                    caminhoImagem = "here's"
                /> */}

                    {/* <AddCard /> */}

                </ApiListWrapper>

            </Container>
        );
    }
}
