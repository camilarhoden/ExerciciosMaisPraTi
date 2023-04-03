import { Container } from "./styles";
import heroImg from "../../assets/images/Hero.jpg";

export function Hero() {
    return (
        <Container>
            <img src={heroImg} alt="Pintura abstrata em tons de azul e laranja"/>
        </Container>
    );
}