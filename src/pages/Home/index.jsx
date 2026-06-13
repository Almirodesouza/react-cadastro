import { useRef } from 'react'
import api from '../../services/api'
import { Container, Form, ContainerInput, Input, InputLabel } from './styles'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import Title from '../../components/Title'
import { useNavigate } from 'react-router-dom'
function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  const registerNewUser = async () => {
    const data = await api.post("/usuarios", {
      email: inputEmail.current.value,
      name: inputName.current.value,
      age: parseInt(inputAge.current.value)
    })
       navigate("/lista-de-usuarios")
  }

  return (
    <Container>

      <TopBackground />

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
        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>
      <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver Usuários</Button>
    </Container>
  )
}

export default Home
