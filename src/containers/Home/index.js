import React, { useState, useRef } from "react";

import axios from "axios"
import People from "../../assets/people.png"
import Arrow from "../../assets/arrow.png"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser(){

  const { data: newUser } = await axios.post("http://localhost:3001/users", { name:inputName.current.value, age:inputAge.current.value })

    setUsers([...users, newUser ])

  }

  return (
    <Container>
      <Image alt="logo" src={People} />
      <ContainerItens>
        <H1>Hello!</H1>
        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Register <img alt="arrow" src={Arrow} />
        </Button>

      </ContainerItens>
    </Container>
  );
};

export default App;
