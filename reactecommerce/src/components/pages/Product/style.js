import styled from "styled-components";

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
    background-color: ${sunset};
`

export const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 80%;
    gap: 20px;
    padding: 20px;
    box-shadow: 0px 0px 35px #111;
    border-radius: 35px;
`

export const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 5px solid yellow;
`

export const TopLeft = styled.div`
    display: flex;
    width: 35%;
    height: 100%;
`

export const ProdutoImage = styled.img`
    width: 350px;
`

export const TopRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 100%;
`

export const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 5px solid blue;
`