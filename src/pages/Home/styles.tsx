import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    font-family: 'Caveat', cursive;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem;
    background-color: thistle;

`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        height: 8rem;
    }

    h1 {
        font-size: 24px;
    }

    p {
        font-size: 20px;
    }

`

export const FormContainer = styled.div`
    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    label {
        margin-right: 1rem;
    }

    input {
        background-color: white;
        border: none;
        color: darkmagenta;
        padding-left: 1rem;
        height: 2rem;
    }

    button {
        height: 2rem;
        width: 5rem;
        cursor: pointer;
        margin-top: 1rem;
        background-color: white;
        border: none;
        border-radius: 4px;
    }
`