import React from "react";

import { NavBar } from "../Layout/NavBar"
import { Footer } from "../Layout/Footer"

import { Home } from '../pages/home'
import { Sobre } from '../pages/about'
import { SobreDevs } from '../pages/aboutdevs'
import { NotFound } from '../pages/NotFound'
import { Products } from '../pages/products'
import { Product } from '../pages/Product'
import { Cart } from '../pages/cart'

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export const Root = () => {


    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produtos" element={<Products />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/sobre/devs" element={<SobreDevs />} />
                <Route path="/produto/:idUseParams" element={<Product />} />
                <Route path="/carrinho" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}