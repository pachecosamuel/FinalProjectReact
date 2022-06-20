import React from "react";
import styled from "styled-components";

const stormy = "#494e6b"
const cloud = "#98878f"
const sunset = "#985e6d"
const evening = "#192231"
const blackzada = "#000000"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: ${props => props.active};
    left: 0;
    transition: 0.25s;
    background-color: ${blackzada};
    width: 100%;
    height: 70px;
    z-index: 999;
`;

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    gap: 20px;
`

export const H1 = styled.a`
    text-decoration: none;
    font-size: 1.7rem;
    color: aliceblue;
    text-shadow: 0px 0px 2px aliceblue;
    transition: 0.3s;
    &:hover {
        transform: scale(105%);
        text-shadow: 0px 0px 5px aliceblue;
    }
`

export const Image = styled.img`
    width: 65px;
    transition: 0.3s;
    &:hover {
        transform: scale(105%);
    }
`

export const ContainerRefs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

export const Lista = styled.ul`
    list-style: none;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const Item = styled.li`
    list-style: none;
    list-style-type: none;
    color: aliceblue;
    font-size: 1.4rem;
    transition: 0.3s;
    &:hover {
        transform: scale(105%);
    }
`;

export const Href = styled.a`
    text-decoration: none;
    color: aliceblue;
    text-shadow: 0px 0px 2px aliceblue;
    font-size: 1.3rem;
    transition: 0.3s;
    &:hover {
        text-shadow: 0px 0px 5px aliceblue;
    }
`
