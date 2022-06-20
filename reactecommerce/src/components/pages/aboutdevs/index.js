import React from "react";

import { Container, Organizacao, ArrowLeft, ArrowRight, Href } from "./style";
import styles from "./style.module.css"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Samuel from "../../../img/fotoSamuel.jpg"
import Bernardo from "../../../img/fotoBernardo.jpg"
import Jessica from "../../../img/fotoJessica.jpg"
import Mateus from "../../../img/fotoMateus.jpg"
import Simone from "../../../img/fotoSimone.jpg"
import arrow from "../../../img/arrow.png"

// import App from "../../../img/imagemSamuel.jpg"

// C:\Users\Samuel Pacheco\Desktop\ProjetoReact\reactecommerce\src\img
// src\img

export const SobreDevs = () => {

    return (
        <Container>
            <div className={styles.AboutTitle}>
                <Href href="http://localhost:3000/sobre"><ArrowLeft src={arrow}/></Href>
                <h1>Sobre os Devs</h1>
                <Href href="http://localhost:3000/sobre"><ArrowRight src={arrow}/></Href>
            </div>

            <Organizacao>
                <section className={styles.SectionAbout}>

                    <div className={styles.Container}>

                        <div className={styles.Cards}>
                            <div className={styles.ContaineFoto}>
                                <div className={styles.Foto}>
                                    <img className={styles.FotoPessoa} src={Bernardo} alt="Foto do Bernardo" />
                                </div>
                                <div className={styles.NomeContainer}>
                                    <h2 className={styles.Nome}>Bernardo Gonçalves</h2>
                                </div>
                                <div className={styles.SocialMedia}>
                                    <ul>
                                        <li><a href="https://www.instagram.com/bezinesss/" target="_blank"><p className={styles.Icones} ><FaInstagram /></p></a></li>
                                        <li><a href="https://www.linkedin.com/in/bernardodevadv/" target="_blank"><p className={styles.Icones} ><FaLinkedin /></p></a></li>
                                        <li><a href="https://github.com/bernardoR0ch4" target="_blank"><p className={styles.Icones} ><FaGithub /></p></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.Texto}>
                                <p className={styles.Sobre} >
                                    Bernardo tem 26 anos, Brasileiro, Petropolitano, ávido por conhecimento e adora aprender coisas novas.
                                    Ex-estudante de Ciências Biológicas pela Universidade Federal do Estado do Rio de Janeiro, bacharelado
                                    em Direito pela Universidade Estácio de Sá agora estuda programação de softwares através da Residência em TIC/Software
                                    do Serratec. Também é apaixonado por música, gastronomia e futebol.
                                </p>
                            </div>
                        </div>
                    </div >
                </section >
            </Organizacao>


            <Organizacao>
                <section className={styles.SectionAbout}>

                    <div className={styles.Container}>

                        <div className={styles.Cards}>
                            <div className={styles.ContaineFoto}>
                                <div className={styles.Foto}>
                                    <img className={styles.FotoPessoa} src={Mateus} alt="Foto do Mateus" />
                                </div>
                                <div className={styles.NomeContainer}>
                                    <h2 className={styles.Nome}>Mateus Reis</h2>
                                </div>
                                <div className={styles.SocialMedia}>
                                    <ul>
                                        <li><a href="https://www.instagram.com/matt.reis__/" target="_blank"><p className={styles.Icones} ><FaInstagram /></p></a></li>
                                        <li><a href="https://www.linkedin.com/in/mateuspsvreis/" target="_blank"><p className={styles.Icones} ><FaLinkedin /></p></a></li>
                                        <li><a href="https://github.com/mattpsvreis" target="_blank"><p className={styles.Icones} ><FaGithub /></p></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.Texto}>
                                <p className={styles.Sobre} >
                                    Mateus, 21 anos, é um Desenvolvedor Full Stack que está atualmente cursando Residência em TIC/Software pelo SERRATEC em parceria com SENAI. Também está cursando bacharelado em Administração pela UFRRJ, estando já no 6º semestre. Hoje está em busca de seguir seu sonho de se tornar um Desenvolvedor Full Stack e ingressar no mercado de T.I, uma área que sempre teve facilidade desde pequeno.
                                </p>
                            </div>
                        </div>
                    </div >
                </section >
            </Organizacao>

            <Organizacao>
                <section className={styles.SectionAbout}>

                    <div className={styles.Container}>

                        {/* <!-- Samuel -->
                    <!-- SAMUEL --> */}
                        <div className={styles.Cards}>
                            <div className={styles.ContaineFoto}>
                                <div className={styles.Foto}>
                                    <img className={styles.FotoPessoa} src={Samuel} alt="Foto do Samuel" />
                                </div>
                                <div className={styles.NomeContainer}>
                                    <h2 className={styles.Nome}>Samuel Pacheco</h2>
                                </div>
                                <div className={styles.SocialMedia}>
                                    <ul>
                                        <li><a href="https://www.instagram.com/pachecosamuel_/" target="_blank"><p className={styles.Icones} ><FaInstagram /></p></a></li>
                                        <li><a href="https://www.linkedin.com/in/samuel-pacheco07" target="_blank"><p className={styles.Icones} ><FaLinkedin /></p></a></li>
                                        <li><a href="https://github.com/pachecosamuel" target="_blank"><p className={styles.Icones} ><FaGithub /></p></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.Texto}>
                                <p className={styles.Sobre} >
                                    Samuel tem 24 anos, Gestor de metodologias ágeis e desenvolvedor de software, nascido na região serrana do Rio do Janeiro. Apaixonado desde a infância por games, consoles e tecnologia, assim continua até os dias atuais. No momento, está cursando a residência TIC-Serratec em desenvolvimento Full Stack 2022.1 e também a faculdade de Gestão de TI.
                                </p>
                            </div>
                        </div>
                    </div >
                </section >
            </Organizacao>

            <Organizacao>
                <section className={styles.SectionAbout}>

                    <div className={styles.Container}>

                        {/* <!-- Samuel -->
                    <!-- SAMUEL --> */}
                        <div className={styles.Cards}>
                            <div className={styles.ContaineFoto}>
                                <div className={styles.Foto}>
                                    <img className={styles.FotoPessoa} src={Simone} alt="Foto do Simone" />
                                </div>
                                <div className={styles.NomeContainer}>
                                    <h2 className={styles.Nome}>Simone Rodrigues</h2>
                                </div>
                                <div className={styles.SocialMedia}>
                                    <ul>
                                        <li><a href="https://www.instagram.com/simone.araujo13/" target="_blank"><p className={styles.Icones} ><FaInstagram /></p></a></li>
                                        <li><a href="#" target="_blank"><p className={styles.Icones} ><FaLinkedin /></p></a></li>
                                        <li><a href="https://github.com/rodriguessimone" target="_blank"><p className={styles.Icones} ><FaGithub /></p></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.Texto}>
                                <p className={styles.Sobre} >
                                    Simone tem 50 anos, formada em Direito, e com experiência na área
                                    administrativa. Está sempre disposta à novos desafios, hoje, ela
                                    cursa o programa de Residência de Software, oferecido pelo
                                    Serratec. E nas horas vagas, está à procura por novas aventuras e
                                    inovações, ampliando sempre o seu conhecimento e aprimorando seus
                                    dons e habilidades.
                                </p>
                            </div>
                        </div>
                    </div >
                </section >
            </Organizacao>

            <Organizacao>
                <section className={styles.SectionAbout}>

                    <div className={styles.Container}>

                        {/* <!-- Samuel -->
                    <!-- SAMUEL --> */}
                        <div className={styles.Cards}>
                            <div className={styles.ContaineFoto}>
                                <div className={styles.Foto}>
                                    <img className={styles.FotoPessoa} src={Jessica} alt="Foto do Jessica" />
                                </div>
                                <div className={styles.NomeContainer}>
                                    <h2 className={styles.Nome}>Jéssica Sabino</h2>
                                </div>
                                <div className={styles.SocialMedia}>
                                    <ul>
                                        <li><a href="https://www.instagram.com/jeje.sabino/" target="_blank"><p className={styles.Icones} ><FaInstagram /></p></a></li>
                                        <li><a href="#" target="_blank"><p className={styles.Icones} ><FaLinkedin /></p></a></li>
                                        <li><a href="https://github.com/JessySabino" target="_blank"><p className={styles.Icones} ><FaGithub /></p></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.Texto}>
                                <p className={styles.Sobre} >
                                    Jéssica, tem 30 anos, formada em Tecnologia da informação, estudande de Engenharia de Computação - CEFET e atualmente cursando a Residência TIC/Software pelo Serratec. Sempre trabalhei com manutenção e redes de computadores, só agora começei a me interesar por programação. Musicista nas horas vagas, e apaixonada por séries.
                                </p>
                            </div>
                        </div>
                    </div >
                </section >
            </Organizacao>


        </Container >


    );
}