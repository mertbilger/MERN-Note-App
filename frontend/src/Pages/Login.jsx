import { useState } from "react"
import {useLogin} from '../hooks/useLogin'
import { FormContainer } from '../StyledComponents/LoginandSignupStyled'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  background-color: #f44336; /* Hata rengi */
  color: #fff; /* Yazı rengi */
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
`;

const Login=()=>{

    const [email,setEmail]=useState('')
    const [parola,setParola]=useState('')

    const {login,hata,yukleniyor}=useLogin()

    const handleSubmit=async (e)=>{
        e.preventDefault();

        await login(email,parola);
    }
   

    return (
        <FormContainer className="signup" onSubmit={handleSubmit}>
            <h3>Giriş Yap</h3>
            <label>Email:</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)} />

            <label>Parola:</label>
            <input type="password" onChange={(e)=>setParola(e.target.value)} />

            <button disabled={yukleniyor} type="submit">Giriş</button>

            {hata && <ErrorContainer className="error">{hata}</ErrorContainer>}
        </FormContainer>
    )
}


export default Login