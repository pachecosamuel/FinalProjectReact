import React from "react";
import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    /* justify-content: center; */

    background-color: #192231;

    border: 4px solid tomato;
    border-radius: 10px;
`;

export const Lista = styled.ul `
    list-style: none;
    list-style-type: none;

`;

export const Item = styled.li `
    text-decoration: none;
    list-style: none;
    list-style-type: none;
    color: #fff;
    font-size: 1.4rem;
`;



export const Teste = styled.div `
    border: 2px solid black;
    color: #fff;
`;
