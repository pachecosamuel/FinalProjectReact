import styled from "styled-components";

export const Card = styled.div`
    background: #fff;
    box-shadow: 0px 0px 15px #111;
    padding: 10px;
    height: 400px;
    width: 300px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.2s;
    row-gap: 8px;

    h2 {
        border-left: 3px solid #bbb;
        color: #111;
        text-shadow: 0px 0px 1px #111;
        text-align: left;
        font-size: 1.25rem;
        width: 90%;
        padding-left: 8px;
    }

    p {
        border-left: 3px solid #bbb;
        color: #111;
        text-shadow: 0px 0px 1px #111;
        font-style: italic;
        text-align: left;
        width: 90%;
        padding-left: 8px;
    }

    img {
        border-left: 3px solid #bbb;
        width: 90%;
        max-height: 60%;
        padding-left: 8px;
    }

    &:hover {
        transform: scale(102%)
    }
`;