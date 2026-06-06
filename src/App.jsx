import { Container, Form, Title, ContainerInput, Input, Button, TopBackground, InputLabel } from './styles'
import UsersImg from "./assets/users.png"
function App() {

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
            <Input type="text" placeholder="Nome do Usuário" />
          </div>
          <div>
            <InputLabel>Idade:<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do Usuário" />
          </div>
        </ContainerInput>
        <div style={{ width: "100%" }}>
          <InputLabel>E-mail:<span> *</span></InputLabel>
          <Input type="email" placeholder="E-mail do Usuário" />
        </div>
        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default App
