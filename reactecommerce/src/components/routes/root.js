import React from "react";

import { NavBar } from "../Layout/NavBar"
import { Footer } from "../Layout/Footer"

import { Home } from '../pages/Home'
import { Sobre } from '../pages/About'
import { NotFound } from '../pages/NotFound'
import { ProdutoApi } from '../pages/Products'



import { 
    BrowserRouter as Router, 
    Routes, 
    Route, 
    Link 
} from 'react-router-dom';

export const Root = () => {


    return (

        <Router>

            <NavBar />

            <Routes>

                <Route exact path="/" element={<Home />} />

                <Route path="/produtoapi" element={<ProdutoApi />} />

                <Route path="/sobre" element={<Sobre />} />
                
                <Route path="*" element={<NotFound />} />

            </Routes>

            <Footer />

        </Router>
    );
}