import styled from "styled-components"

export const Href = styled.a`
    text-decoration: none;
    color: #111;
`

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-inline: 40px;
    padding-block: 30px;
    height: 90vh;
`

export const ContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 90%;
    background-color: #fff;
    box-shadow: 0px 0px 15px #fff;
    border-radius: 15px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px;
    gap: 20px;

`

export const FormTitle = styled.p`
    text-align: center;
    font-size: 32px;
    text-shadow: 0px 0px 1px #111;
`

export const FormInput = styled.input`
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    padding-inline: 5px;
    outline: none;
    width: 70%;
`

export const FormButton = styled.button`
    cursor: pointer;
    font-size: 16px;
    padding-block: 2px;
    padding-inline: 6px;
    border: 1px solid #111;
    border-radius: 5px;
    background-color: #eee;
    box-shadow: 0px 0px 5px #888;
    transition: 0.1s;
    &:hover {
        transform: scale(102%);
        background-color: #ddd;
    }

    &:active {
        background-color: #600;
    }
`