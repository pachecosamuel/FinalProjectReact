import styled from "styled-components";
import imgBanner from "./imgBanner/imgBanner.png";

export const BannerContanier = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${imgBanner});
  background-position: center;
  background-size: cover;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  div {
    z-index: 10;
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #eeeeee;
    margin: 0;
    margin-bottom: 1rem;
  }

  h1 {
    text-transform: uppercase;
    font-size: 2.8rem;
    color: #dfa70c;
    margin: 1.5rem;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #eeeeee;
    margin: 0;
    margin-bottom: 1rem;
  }

  button {
    min-width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    color: #eeeeee;
    background-color: transparent;
    border-radius: 42px;
    font-size: 1rem;
    font-weight: bold;

    padding: 10px 15px;
    margin: 0 auto;
    margin-bottom: 1 rem;
    margin-top: 2rem;
    
    transition-duration: 1s;
    cursor: pointer;

    &:hover {
      color: #dfa70c;
      border: solid 1px #eeeeee;
      transition-duration: 1s;
    }
  }
`;
