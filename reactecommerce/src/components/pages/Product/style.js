import styled from "styled-components";
import Fundo from "../../../img/fundoapi.jpg"

const stormy = "#494e6b"
const cloud = "#98878f"
const sunset = "#985e6d"
const evening = "#192231"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: url(${Fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    width: 90%;
    height: 80%;
    gap: 20px;
    padding: 20px;
    box-shadow: 0px 0px 35px #111;
    background-color: #fff;
    border-radius: 35px;
`

export const InsideContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    gap: 10px;
`

export const ProdutoImage = styled.img`
    width: 300px;
    border-radius: 50%;
    box-shadow: 0px 0px 20px #111;
    transition: 0.2s;
    &:hover {
        transform: scale(102%);
    }
`

export const ProdutoTitle = styled.p`
    font-size: 32px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
    font-weight: bold;
`

export const ProdutoValor = styled.p`
    font-size: 24px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    height: 100%;
`

export const RightTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    width: 100%;
    height: 85%;
`

export const ProdutoDescricao = styled.p`
    font-size: 16px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
    text-align: justify;
`

export const RightBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15%;
    gap: 20px;
`

export const Btn = styled.button`
    cursor: pointer;
    background-color: #fff;
    border: none;
    padding: 10px;
    font-weight: bold;
    font-size: 20px;
    transition: 0.2s;
    box-shadow: 0px 0px 10px #555;
    border: 2px solid #111;
    border-radius: 10px;
    &:hover {
        background-color: #eee;
        transform: scale(102%)
    }
`

export const BtnHref = styled.a`
    color: #111;
    text-decoration: none;
    text-shadow: 0px 0px 1px #888;
`