import React from "react";
import {
  Alinhamento,
  Container,
  CardWrapper1,
  CardWrapper2,
  CardWrapper3,
  CardWrapper4,
  CardWrapper5,
  CardWrapper6,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardButton,
} from "./style";
import "./styles.css";
import {
  Link
} from 'react-router-dom';
import Banner from "../../Banner";
import Marcas from "../../Marcas";


export function Home() {
  return (
    <div className="App">
      <Alinhamento>
        <Banner />
        <Container>
          <CardWrapper1>
            <CardHeader>
              <CardHeading></CardHeading>
            </CardHeader>
            <CardBody>
              <CardFieldset>

              </CardFieldset>
              <CardFieldset>
                <CardButton type="button" >
                  <Link to="/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
                </CardButton>
              </CardFieldset>
            </CardBody>
          </CardWrapper1>

          <CardWrapper2>
            <CardHeader>
              <CardHeading></CardHeading>
            </CardHeader>
            <CardBody>
              <CardFieldset>
              </CardFieldset>
              <CardFieldset>
                <CardButton type="button" >
                  <Link to="/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
                </CardButton>
              </CardFieldset>
            </CardBody>
          </CardWrapper2>

          <CardWrapper3>
            <CardHeader>
              <CardHeading></CardHeading>
            </CardHeader>
            <CardBody>
              <CardFieldset>

              </CardFieldset>
              <CardFieldset>
                <CardButton type="button" >
                  <Link to="/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
                </CardButton>
              </CardFieldset>
            </CardBody>
          </CardWrapper3>

          {/* PARTE INFERIOR DOS CARDS ESSE É O 1° */}
          <CardWrapper4>
            <CardHeader>
              <CardHeading></CardHeading>
            </CardHeader>
            <CardBody>
              <CardFieldset>
              </CardFieldset>
              <CardFieldset>
                <CardButton type="button" >
                  <Link to="/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
                </CardButton>
              </CardFieldset>
            </CardBody>
          </CardWrapper4>

          {/* PARTE INFERIOR DOS CARDS ESSE É O 2° */}
          <CardWrapper5>
            <CardHeader>
              <CardHeading></CardHeading>
            </CardHeader>
            <CardBody>
              <CardFieldset>
              </CardFieldset>
              <CardFieldset>
                <CardButton type="button" >
                  <Link to="/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
                </CardButton>
              </CardFieldset>
            </CardBody>
          </CardWrapper5>

          {/* PARTE INFERIOR DOS CARDS ESSE É O 3° */}
          <CardWrapper6>
            <CardHeader>
              <CardHeading></CardHeading>
            </CardHeader>
            <CardBody>
              <CardFieldset>
              </CardFieldset>
              <CardFieldset>
                <CardButton type="button" >
                  <Link to="/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
                </CardButton>
              </CardFieldset>
            </CardBody>
          </CardWrapper6>
        </Container>

        <Marcas />
      </Alinhamento>
    </div>
  );
}

export default Home

