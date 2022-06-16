import React from "react";
import { Link } from "react-router-dom"
import { Item, Lista, Container, Teste } from "./styleNavBar"

export const NavBar = () => {

    return (

        <Container>
            <Lista>

                <Item>
                    <Link to="/" >indexHome</Link>
                </Item>

                <Item>
                    <Link to="/produtoapi" >ProdutoApi</Link>
                </Item>

                <Item>
                    <Link to="/sobre" >Sobre</Link>
                </Item>

            </Lista>
        </Container>
    );
}