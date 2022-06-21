import styled from "styled-components";

export const MarcasContanier = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 1024px;
  margin: 1rem auto 1rem;

  h2 {
    color: #fff;
  }
`;

export const AreaLogo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  gap: 2rem;
  max-width: 720px;
`;

export const ImgQuadrinhos = styled.img`
  height: 60vh;
  width: 40vw;
  margin-top: 5rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 25rem;
  padding-right: 25rem;
`;

export const ImgDc = styled.img`

  display: block;
  justify-content: space-around;
  align-items: center;

  height: 15vh;
  width: 20vh;

  margin: auto;
  padding: 1rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;