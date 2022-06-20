import styled from "styled-components";
import Fundo from "../../../img/fundoapi.jpg"

export const EstiloFundo = styled.div`
    background-image: url(${Fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
`;

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    width: 85%;
    /* height: 70vh; */
    margin: 1rem auto 0;
    padding-top: 80px;

    /* background-color: #ffffff; */
    /* background-image: url(${Fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; */

    /* border: 5px solid black; */

    h1 {
        font-size: 1.2rem;
        color: black;
    }
`;

export const ApiListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    justify-self: center;

    max-width: 1000px;
    /* list-style-type: none; */
    margin-bottom: 3rem;

    /* border: 5px solid tomato; */

    flex-wrap: wrap;
    gap: 10px;
`;

export const ContainerCard = styled.div`
    background: #985e6d;
    padding: 10px;
    height: 280px;
    width: 250px;

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        color: #1e1e1e;
    }

    p {
        border-left: 3px solid #bbb;
        padding-left: 10px;
        max-width: 230px;

        margin-top: 10px;
        margin-bottom: 10px;

        color: #999999;
        font-style: italic;
        align-self: start;

        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
    }
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    margin-top: 5px;
`;
