import { useRef } from 'react'
import api from '../../services/api'
import { Container, Form, Title, ContainerInput, Input, Button, TopBackground, InputLabel } from './styles'
import UsersImg from "../../assets/users.png"
function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const registerNewUser = async () => {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: inputAge.current.value
    })

  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImg} alt="User-Image" />
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInput>
          <div>
            <InputLabel>Nome:<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade:<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInput>
        <div style={{ width: "100%" }}>
          <InputLabel>E-mail:<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" ref={inputEmail} />
        </div>
        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home
