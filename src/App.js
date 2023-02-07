import React, { useState, useRef } from "react";

import axios from "axios"
import People from "./assets/people.png"
import Arrow from "./assets/arrow.png"
import Trash from "./assets/trash.png"

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from "./styles";

function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser(){

  const { data: newUser } = await axios.post("http://localhost:3001/users", { name:inputName.current.value, age:inputAge.current.value })

    setUsers([...users, newUser ])

  const { data: newUsers } = await axios.get("http://localhost:3001/users")

    setUsers(newUsers)
  }

  function deleteUser(userId){
    const newUsers = users.filter(user => user.id !== userId)
    
    setUsers(newUsers)
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

        <ul>
          {
            users.map( user => (
              <User key={user.id}>
                <p>{user.name}</p> <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}> <img alt="Trash" src={Trash}/> </button>
              </User>
            ))
          }
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
