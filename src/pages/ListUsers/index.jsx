import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground';
import Title from '../../components/Title';
import api from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, ContainerUsers, CardUser, AvatarUser, TrashIcon } from './styles';
import Trash from "../../assets/trash.svg";

function ListUsers() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getUsers() {

            const { data } = await api.get("/usuarios");

            setUsers(data);
        }

        getUsers()

    }, []);

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`);

        const updatetUsers = users.filter(user => user.id !== id);
        
        setUsers(updatetUsers);
    }

    return (

        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>
            <ContainerUsers >
                {users.map(user => (
                    <CardUser key={user.id}>
                        <AvatarUser src={`https://avatarapi.runflare.run/public?usearname=${user.id}`} alt='avatar'/>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src= {Trash} alt="Icone-de-lixeira" onClick={() => deleteUser(user.id)}/>
                    </CardUser>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate("/")}>Voltar</Button>

        </Container>

    );
};

export default ListUsers;