import React from 'react';

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from './styles';

function App() {
  const users = [
    { id: Math.random(), name: 'Daniel', age: 27 },

    { id: Math.random(), name: 'Leticia', age: 25 },

    
  ];

  return (
    <Container>
      <Image alt='logo-imagem' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar <img alt='seta' src={Arrow}></img></Button>


        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>

          ))
          }
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;