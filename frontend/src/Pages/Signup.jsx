import { useState } from "react"
import { FormContainer } from '../StyledComponents/LoginandSignupStyled'
import { useSignup } from "../hooks/useSignup"
import styled from 'styled-components';

const ErrorContainer = styled.div`
  background-color: #f44336; /* Hata rengi */
  color: #fff; /* Yazı rengi */
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
`;
const Signup = () => {

    const [email, setEmail] = useState('')
    const [parola, setParola] = useState('')

    const { signup, hata, yukleniyor } = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(email, parola)

    }


    return (
        <FormContainer onSubmit={handleSubmit}>
            <h3>Üye Ol</h3>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />

            <label>Parola:</label>
            <input type="password" onChange={(e) => setParola(e.target.value)} />
            <button disabled={yukleniyor} type="submit">Üye Ol</button>
            {hata && <ErrorContainer>{hata}</ErrorContainer>}

        </FormContainer>
    )
}


export default Signup