import styled from "styled-components";
import Fundo404 from "../../../img/404.png";


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 85%;
    height: 70vh;
    margin: 1rem auto 1rem;
    padding-top: 80px;

    background-image: url(${Fundo404});
    background-position: center;

    border: 5px solid white;
    border-radius: 50px;
`;

