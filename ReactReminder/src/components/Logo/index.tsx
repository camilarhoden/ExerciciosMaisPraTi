import { Container } from "./styles";
import logoImg from "../../assets/images/RLogo.png";

export function Logo() {
    return (
        <Container>
            <img src={logoImg} alt="React Reminder Logo" />
        </Container>
    );
}