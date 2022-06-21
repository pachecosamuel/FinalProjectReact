// A ideia dessa página é consumir os recursos
// que a API irá disponibilizar. Esse nome
// é fictício e temporário.

import React, { useEffect } from "react";
import { ObterProdutos } from "../../services/api-produto";
import { Container, ApiListWrapper, ContainerCard, EstiloFundo } from "./style";
import { Consumo } from "./Consumo/"
import { AddCard } from "./AddCard/"



export const Products = () => {
    const [produtos, setProdutos] = React.useState([]);

    useEffect(() => {
        ObterProdutos().then((res) => setProdutos(res.data))
    }, [])


    if (produtos.length < 1) {
        return (
           <>
           </>
        );
    } else {
        return (
            <EstiloFundo>
                <Container>
                    <ApiListWrapper>
                        {produtos?.map((item) => (
                            <Consumo
                                key={item.idProduto}
                                idProduto={item.idProduto}
                                nomeProduto={item.nomeProduto}
                                descricaoProduto={item.descricaoProduto}
                                valorUnitario={item.valorUnitario}
                            />
                        ))}
                    </ApiListWrapper>
                </Container>
            </EstiloFundo>
        );
    }
}