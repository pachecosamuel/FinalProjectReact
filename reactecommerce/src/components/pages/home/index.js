import React from "react";
import {
  CardWrapper1,
  CardWrapper2,
  CardWrapper3,
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


export function Home() {
  return (
    <div className="App">
      <Banner />
      <CardWrapper1>
        <CardHeader>
          <CardHeading></CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
           
          </CardFieldset>
          <CardFieldset>
            <CardButton type="button" >
            <Link to = "/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
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
            <Link to = "/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
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
            <Link to = "/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper3>

      <CardWrapper3>
        <CardHeader>
          <CardHeading></CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            
          </CardFieldset>
          <CardFieldset>
          <CardButton type="button" >
            <Link to = "/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper3>

      <CardWrapper3>
        <CardHeader>
          <CardHeading></CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            
          </CardFieldset>
          <CardFieldset>
          <CardButton type="button" >
            <Link to = "/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper3>

      <CardWrapper3>
        <CardHeader>
          <CardHeading></CardHeading>
        </CardHeader>
        <CardBody>
          <CardFieldset>
            
          </CardFieldset>
          <CardFieldset>
          <CardButton type="button" >
            <Link to = "/produtos" style={{ textDecoration: 'none' }} >Veja mais!</Link>
            </CardButton>
          </CardFieldset>
        </CardBody>
      </CardWrapper3>
    </div>
  );
}

export default Home

