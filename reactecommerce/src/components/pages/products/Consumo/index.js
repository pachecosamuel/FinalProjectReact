import React from "react";
import { Card } from "./style";
import { Link } from "react-router-dom"

export const Consumo = ({ idProduto, nomeProduto, descricaoProduto, valorUnitario }) => {

    const [img, setImg] = React.useState();

    // Essa função faz a requisição da imagem através de um Endpoint para poder evitar o erro de "Not allowed to access local files"
    const fetchImage = async () => {
        const res = await fetch(`http://localhost:8080/ecommerce/produto/${idProduto}/image`);
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
    };

    React.useEffect(() => {
        fetchImage();
        console.log(img)
    }, []);

    return (
        <li>
            <Link to={`../produto/${idProduto}`} style={{textDecoration: "none"}}>
                <Card>
                    <h2>{nomeProduto}</h2>
                    <p>{descricaoProduto}</p>
                    <img src={img}/>
                    <p>Valor Unitário: R${valorUnitario},00</p>
                </Card>
            </Link>
        </li>
    );
}