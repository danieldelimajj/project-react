import React, { useState } from 'react';

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from './styles';

function App() {
  const [ users, setUsers ] = useState([]);
   

function addNewUser(){
  setUsers([{id: Math.random(), name:'Daniel, age: 27'}])
};

  return (
    <Container>
      <Image alt='logo-imagem' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={Arrow}></img></Button>


        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  
              <p>{user.age}</p>
              <button><img src={Trash} alt='Lata de lixo'/></button>
              </ User>            

          )) }
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;