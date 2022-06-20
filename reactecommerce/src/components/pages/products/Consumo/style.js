import styled from "styled-components";

export const Container = styled.div`
    background: #985e6d;
    padding: 10px;
    height: 320px;
    width: 250px;

    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h2 {
        color: #1e1e1e;
    }

    p {
        border-left: 3px solid #bbb;
        padding-left: 10px;
        max-width: 230px;

        margin-top: 10px;
        margin-bottom: 10px;

        color: #999999;
        font-style: italic;
        align-self: start;

        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
    }
`;

export const ButtonArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    margin-top: 5px;
`;


export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    transition: opacity 0.2s ease-out;

    svg{
        height: 20px;
        width: 20px;
        color: #1e1e1e;
    }

    &:hover{
        opacity: 0.5;
        color: tomato;
    }
`;