import React from "react";
import styled, { css } from "styled-components";
import imgHome from "./imgHome/categoria.jpg"
import imgHome2 from "./imgHome2/categoria2.jpg"
import imgHome3 from "./imgHome3/categoria3.jpg"



export const CardWrapper1 = styled.div`
  background-color: #E2E1D9;
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  background-image: url(${imgHome});
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
margin: 48px auto 0;
background-image: url(${imgHome2});
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
  margin: 48px auto 0;
  background-image: url(${imgHome3});
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
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 30px;
  font-weight: 700;
  color: #192231; 
  background-color:#E2E1D9;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  opacity: 0.8;
  

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;





