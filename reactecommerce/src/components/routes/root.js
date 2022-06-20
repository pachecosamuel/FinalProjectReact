import React from "react";

import { NavBar } from "../Layout/NavBar"
import { Footer } from "../Layout/Footer"

import { Home } from '../pages/home'
import { Sobre } from '../pages/about'
import { SobreDevs } from '../pages/aboutdevs'
import { NotFound } from '../pages/NotFound'
import { ProdutoApi } from '../pages/products'
import { Product } from '../pages/Product'
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
                <Route path="/produtoapi" element={<ProdutoApi />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/sobre/devs" element={<SobreDevs />} />
                <Route path="/produto/:idUseParams" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    );
}