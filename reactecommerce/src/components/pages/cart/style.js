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
    padding-block: 40px;
`

export const SuperContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: center;
    max-width: 90%;
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
    gap: 20px;
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    border-left: 3px solid #999a;
    padding-left: 16px;
    gap: 20px;
`

export const RightTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 92%;
    height: 80%;
    gap: 10px;
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

export const ProductRemove = styled.button`
    cursor: pointer;
    border: 1px solid #111;
    padding: 4px;
    box-shadow: 0px 0px 6px #555;
    transition: 0.1s;
    outline: none;

    &:hover {
        background-color: #ccc;
    }

    &:active {
        background-color: #900;
    }
`

export const RightBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const FinishOrder = styled.button`
    cursor: pointer;
    border: 1px solid #111;
    background-color: #fff;
    padding: 4px;
    transition: 0.1s;
    font-weight: bold;
    font-size: 14px;
    box-shadow: 0px 0px 6px #555;
    outline: none;

    &:hover {
        background-color: #eee;
        transform: scale(103%)
    }

    &:active {
        background-color: #900;
    }
`