import React from "react";
import { useParams } from "react-router-dom";
import { MainContainer, SuperContainer, BtnHref, InsideContainer, Left, Right, RightTop, ProdutoValor, ProdutoEstoque, ProdutoImage, ProdutoTitle, ProdutoDescricao, RightBottom, Btn, ProdutoCategoria } from "./style";
import { ObterProduto } from "../../services/api-produto";

export function Product() {
    let { idUseParams } = useParams();

    const [produto, setProduto] = React.useState();

    const [img, setImg] = React.useState();

    const formatBRL = value => {
        const options = { style: "currency", currency: "BRL"};
        return value.toLocaleString("pt-BR", options);
    }

    // Essa função faz a requisição da imagem através de um Endpoint para poder evitar o erro de "Not allowed to access local files"
    const fetchImage = async () => {
        const res = await fetch(`http://localhost:8080/ecommerce/produto/${idUseParams}/image`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    React.useEffect(() => {
        ObterProduto(idUseParams).then((res) => setProduto(res.data))
        fetchImage();
    }, []);

    function handleAdd() {
        
    }

    if (produto === undefined) {
        return (
            <>
            </>
        )
    } else {
        return (
            <MainContainer>
                <SuperContainer>
                    <InsideContainer>
                        <Left>
                            <ProdutoImage src={`${img}`}></ProdutoImage>
                            <ProdutoTitle>{`${produto.nomeProduto}`}</ProdutoTitle>
                            <ProdutoValor>{`${formatBRL(produto.valorUnitario)}`}</ProdutoValor>
                        </Left>
                        <Right>
                            <RightTop>
                                <ProdutoCategoria><b>Categoria: </b>{`${produto.categoriaDTO.nomeCategoria}`}</ProdutoCategoria>
                                <ProdutoEstoque><b>Estoque: </b>{`${produto.qtdEstoque}`} un.</ProdutoEstoque>
                                <ProdutoDescricao><b>Descrição do Produto: </b>{`${produto.descricaoProduto}`}</ProdutoDescricao>
                            </RightTop>
                            <RightBottom>
                                <BtnHref href="http://localhost:3000/carrinho" onClick={handleAdd}>
                                    <Btn>Adicionar ao carrinho</Btn>
                                </BtnHref>
                                <BtnHref href="http://localhost:3000/produtos">
                                    <Btn>Voltar</Btn>
                                </BtnHref>
                            </RightBottom>
                        </Right>
                    </InsideContainer>
                </SuperContainer>
            </MainContainer>
        );
    }
}
