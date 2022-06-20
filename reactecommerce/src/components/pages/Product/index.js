import React from "react";
import { useParams } from "react-router-dom";
import { MainContainer, SuperContainer, Top, Bottom, TopLeft, TopRight, ProdutoImage } from "./style";
import { ObterProduto } from "../../Services/api-produto";

export function Product() {
    let { idUseParams } = useParams();

    const [produto, setProduto] = React.useState();
    console.log(produto)

    const [img, setImg] = React.useState();

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

    if (produto === undefined) {
        return (
            <>
            </>
        )
    } else {
        return (
            <MainContainer>
                <SuperContainer>
                    <Top>
                        <TopLeft>
                            <ProdutoImage src={`${img}`}></ProdutoImage>
                        </TopLeft>
                        <TopRight>

                        </TopRight>
                    </Top>
                    <Bottom>

                    </Bottom>
                </SuperContainer>
            </MainContainer>
        );
    }
}
