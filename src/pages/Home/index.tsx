import { Container, Header } from "./styles";

//@ts-ignore
import sucrose from "../../assets/writing.png";

const Home = () => {
  console.log("");

  return (
    <Container>
      <Header>
        <img src={sucrose} alt="sucrose sticker" />

        <h2>🍓 Strayberry System 🍓</h2>

        <p>esse site é restrito, digite suas credenciais para acessar</p>

        <div>

        </div>
      </Header>
    </Container>
  );
};

export default Home;
