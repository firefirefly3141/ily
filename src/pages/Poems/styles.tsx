import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  font-family: "Fira Code", monospace;
  background-color: black;
  color: lightgreen;
  font-size: 1.4rem;
  padding: 2rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;

`;

export const BodyContainer = styled.div`
  margin-top: 2rem;
`;

export const OptionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  color: white;

  button {
    margin-left: 1rem;
  }
`;

export const RedPill = styled.button`
  background-color: red;
  height: 2rem;
  width: 5rem;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  border-radius: 25px;
  margin-left: 1rem;
`;

export const BluePill = styled.button`
  background-color: blue;
  height: 2rem;
  width: 5rem;
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  border-radius: 25px;
`;

export const SecretTipContainer = styled.div`
    color: red;
    margin-bottom: 2rem;
`