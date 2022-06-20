import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    color: aliceblue;
    padding-block: 30px;
    padding-inline: 40px;
    gap: 15px;
    height: 80vh;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

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

export const AboutTitle = styled.h1`
    font-size: 48px;
    text-align: center
`

export const AboutSubtitle = styled.h3`
    font-size: 18px;
    text-align: center;
`

export const AboutParagraph = styled.p`
    font-size: 14px;
    text-align: justify;
`