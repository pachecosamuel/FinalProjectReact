import styled from "styled-components";

export const Href = styled.a`
    text-decoration: none;
    color: #111;
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

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
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
    width: 25%;
    height: 100%;
    gap: 20px;
`

export const Logo = styled.img`
    width: 180px;
    border-radius: 50%;
    transition: 0.2s;
    &:hover {
        transform: scale(102%);
    }
`

export const PageTitle = styled.h1`
    font-size: 32px;
    text-align: center;
    text-shadow: 0px 0px 1px #111;
`

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 100%;
`

export const RightTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
`

export const Product = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    align-items: center;
    width: 100%;
    height: 110px;
    padding: 10px;
    border: 2px solid #111;
    box-shadow: 0px 0px 12px #888;
    border-radius: 15px;
`

export const ProductName = styled.h1`
    font-size: 24px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
`

export const ProductValue = styled.p`
    font-size: 14px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
`

export const ProductImage = styled.img`
    height: 100px;
`

export const ProductTotal = styled.h3`
    font-size: 14px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
`

export const LabelInputQty = styled.label`
    font-size: 14px;
    color: #111;
    text-shadow: 0px 0px 1px #111;
`

export const InputQty = styled.input`
    width: 50px;
    height: 20px;
`

export const ProductRemove = styled.button`

`

export const RightBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 100%;
    height: 20%;
`