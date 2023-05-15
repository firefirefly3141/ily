import React, { useState } from "react";
import { Container, Header, FormContainer } from "./styles";
import { ToastContainer, toast } from "react-toastify";

//@ts-ignore
import sucrose from "../../assets/writing.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (pass: string) => {
    if (!pass.length) {
      return toast("Digite a senha no campo para logar!");
    }

    if (pass === "ily") {
      return navigate("/190fa7702545a1964425028e84a22b6d");
    }

    return toast("Digite uma senha válida!");
  };

  return (
    <Container>
      <Header>
        <img src={sucrose} alt="sucrose sticker" />

        <h2>🍓 Strayberry System 🍓</h2>

        <p>esse site é restrito, digite suas credenciais para acessar</p>

        <FormContainer>
          <div>
            <label>Secret Password</label>
            <input
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button onClick={() => handleSubmit(pass)}>Entrar</button>
        </FormContainer>
      </Header>
    </Container>
  );
};

export default Home;
