import React from 'react'
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"
import { MainContainer, ContainerButtons, LoginCard, Form, FormTitle, FormInput, FormButton } from './style'

export function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [clientList, setClientList] = React.useState([]);
  let client;
  let idClient;

  function getIdClient (email){
    client = clientList.filter(c => c.email === email)
    console.log(clientList)
    console.log(client)
    if(client[0] === undefined){
      alert('Email não cadastrado. Cadastre-se!')
    }else{
      idClient = client[0].idClient;
      localStorage.setItem('idClient', client[0].idClient)
      localStorage.setItem('nomeClient', client[0].nomeCompleto)
    }    
  }

  const allowLogin = async (email, password) => {
    const response = await api.get(`cliente/logar_cliente?email=${email}&password=${password}`)
    if (response) {
      alert('Sucesso!');
      navigate("../produtos");
      window.location.reload(true);

    } else {
      alert('Senha incorreta!')
      localStorage.removeItem('idClient')
      localStorage.removeItem('nomeClient')
      navigate("/login")
    }      
  }

  function handleLogin() {
    getIdClient(email);
    allowLogin(email, password)
  }

  function handleRegister() {
    navigate("/registrar")
  }

  function handleEmailChange(e){
    setEmail(e.target.value)
  }

  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  const getClients = async () => {
    const response = await api.get(`cliente/`)
    setClientList(response.data)
  }  

  React.useEffect(()=>{
    getClients()
  }, [])

  return (
    <MainContainer>
      <LoginCard>
        <Form>
          <FormTitle>Faça Login:</FormTitle>
          <FormInput onChange={handleEmailChange} placeholder="E-mail" type="text" value={email} />
          <FormInput onChange={handlePasswordChange} placeholder="Senha (CPF)" type="password" value={password} />
          <ContainerButtons>
            <FormButton onClick={handleLogin}>Log-in</FormButton>
            <FormButton onClick={handleRegister}>Registrar</FormButton>
          </ContainerButtons>
        </Form>
      </LoginCard>
    </MainContainer>
  )
}
