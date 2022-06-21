import React from "react";
import styled, { css } from "styled-components";
import imgHome from "./imgHome/categoria.jpg"
import imgHome2 from "./imgHome2/categoria2.jpg"
import imgHome3 from "./imgHome3/categoria3.jpg"
import Miranha from "../../../img/miranha.jpg"
import Thanos from "../../../img/thanos.jpg"
import Mario from "../../../img/mario.jpg"

export const Alinhamento = styled.div`
  margin: auto;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 2rem auto 2rem;
  max-width: 1024px;
`;

export const CardWrapper1 = styled.div`
  background-color: #E2E1D9;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  
  background-image: url(${imgHome});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  
  height: 300px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  `;

export const CardWrapper2 = styled.div`
background-color: #E2E1D9;
overflow: hidden;
padding: 0 0 32px;
margin: 48px auto 48px;
background-image: url(${imgHome2});
background-position: center;
background-size: cover;
background-repeat: no-repeat;

height: 300px;
width: 300px;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 5px;
`;


export const CardWrapper3 = styled.div`
  background-color: #E2E1D9;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 48px;
  background-image: url(${imgHome3});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 300px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  `;


export const CardWrapper4 = styled.div`
  background-color: #E2E1D9;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 48px;
  background-image: url(${Miranha});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 300px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  `;


export const CardWrapper5 = styled.div`
  background-color: #E2E1D9;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 48px;
  background-image: url(${Thanos});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 300px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  `;


export const CardWrapper6 = styled.div`
  background-color: #E2E1D9;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 48px;
  background-image: url(${Mario});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  height: 300px;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  `;


export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

export const CardFieldset = styled.fieldset`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: bottom;


  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;


export const CardButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  min-width: 150px;
  padding: 1.5rem;
  margin: 10.8rem auto;
  height: 40px;

  font-family: inherit;
  font-size: 30px;
  font-weight: 700;
  color: #eeeeee;

  background-image: linear-gradient(transparent, black);
  border: 0;
  border-radius: 25px; 
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  opacity: 0.7;
  
  /* Link{
    text-decoration: none;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
  } */

  &:hover {
    color: black;
    transition-duration: 1s;
    /* box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16); */
    transform: translate(0, -5px);
  }

  a:link {
    color: black;
    transition-duration: 1s;
    /* box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16); */
    transform: translate(0, -5px);
  }

  a:visited {
    color: black;
    transition-duration: 1s;
    /* box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16); */
    transform: translate(0, -5px);
  }

  /* a:active {
    color: black;
    border: solid 1px #eeeeee;
    transition-duration: 1s;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  } */
`;





