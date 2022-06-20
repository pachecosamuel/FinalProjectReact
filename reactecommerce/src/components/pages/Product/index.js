import React from "react";
import { useParams } from "react-router-dom";
import { MainContainer, SuperContainer, BtnHref, InsideContainer, Left, Right, RightTop, ProdutoValor, ProdutoImage, ProdutoTitle, ProdutoDescricao, RightBottom, Btn } from "./style";
import { ObterProduto } from "../../services/api-produto";
import { ContextData } from "../../context/data"

export function Product() {
    let { idUseParams } = useParams();

    const [produto, setProduto] = React.useState();

    const [img, setImg] = React.useState();

    const {cartState, setCartState} = React.useContext(ContextData)

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
        let list = [];
        list.push(produto.idProduto)

        setCartState(cartState.concat(list))
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
                            <ProdutoValor>R${`${produto.valorUnitario}`}</ProdutoValor>
                        </Left>
                        <Right>
                            <RightTop>
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
