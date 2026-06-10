import { Background } from "./styles";
import UsersImg from "../../assets/users.png"

function TopBackground() {

    return (
        <Background>
            <img src={UsersImg} alt="User-Image" />
        </Background>
    )
}

export default TopBackground