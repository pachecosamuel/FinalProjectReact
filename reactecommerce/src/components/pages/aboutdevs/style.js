import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    width: 85%;
    margin: 1rem auto 1rem;
`;

export const Organizacao = styled.div`
    display: flex;
`;

export const Texto = styled.h1`
    font-size: 1.2rem;
`;

export const Href = styled.a`
    text-decoration: none;
    color: aliceblue;
`

export const ArrowLeft = styled.img`
    height: 50px;
    box-shadow: 0px 0px 10px aliceblue;
    border-radius: 50%;
    background-color: #eee;
    transition: 0.2s;
    &:hover {
        box-shadow: 0px 0px 15px aliceblue;
    }
`

export const ArrowRight = styled.img`
    height: 50px;
    transform: scaleX(-1);
    box-shadow: 0px 0px 10px aliceblue;
    border-radius: 50%;
    background-color: #eee;
    transition: 0.2s;
    &:hover {
        box-shadow: 0px 0px 15px aliceblue;
    }
`