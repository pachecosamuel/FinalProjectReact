import React from "react";
import ReactDOM from "react-dom";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardButton,
} from "./style";
import "./styles.css";
import Banner from "./Banner";

export function Home() {
  return (
    <div className="App">
      <Banner />
      <CardWrapper>
        <CardHeader>
          <CardHeading>Categoria 1</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            IMAGEM CATEGORIA 1
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">Veja mais!</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Categoria 2</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            IMAGEM CATEGORIA 2
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">Veja mais!</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>

      <CardWrapper>
        <CardHeader>
          <CardHeading>Categoria 3</CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            IMAGEM CATEGORIA 1
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button">Veja mais!</CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper>




    </div>
  );
}

export default Home

const rootElement = document.getElementById("root");
ReactDOM.render(<Home />, rootElement);