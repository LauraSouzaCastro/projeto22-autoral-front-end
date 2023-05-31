import styled from 'styled-components';
import { useState } from "react";
import useSignUp from '@/hooks/api/useSignUp';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const { signUp } = useSignUp();
    const [signupData, setSignupData] = useState({ name: "", email: "", image: "", password: "", passwordConfirm: "" });
    const [error, setError] = useState('');
    const [click, setClick] = useState(false);
    const router = useRouter();

    async function signUpButton(event) {
        event.preventDefault();
        setClick(true);
        setError('');
        const passwordConfirm = signupData.passwordConfirm;
        if (signupData.password === signupData.passwordConfirm) {
            delete signupData.passwordConfirm;
            try {
                await signUp(signupData);
                setSignupData({ name: "", email: "", image: "", password: "", passwordConfirm: "" });
                router.push('/sign-in');
            } catch (err) {
                signupData.passwordConfirm = passwordConfirm;
                if (err.response.status === 409) {
                    setError('Email já cadastrado');
                }
            }
        } else {
            setError('Confirme sua senha corretamente!');
        }
        setClick(false);
    }
    return (
        <Page>
            <ContainerSignUp>
                <h1>SmartWallet</h1>
                <Form onSubmit={signUpButton} click={click} error={error}>
                    <input disabled={click} required type="text" placeholder="Nome" value={signupData.name} onChange={e => setSignupData({ ...signupData, name: e.target.value })} />
                    <input disabled={click} required type="url" placeholder="Imagem de perfil" value={signupData.image} onChange={e => setSignupData({ ...signupData, image: e.target.value })} />
                    <input disabled={click} required type="email" placeholder="E-mail" value={signupData.email} onChange={e => setSignupData({ ...signupData, email: e.target.value })} />
                    <input disabled={click} required type="password" placeholder="Senha" value={signupData.password} onChange={e => setSignupData({ ...signupData, password: e.target.value })} />
                    <input disabled={click} required type="password" placeholder="Confirme a senha" value={signupData.passwordConfirm} onChange={e => setSignupData({ ...signupData, passwordConfirm: e.target.value })} />
                    
                    <span>{error}</span>
                    
                    <button disabled={click} type="submit">Cadastrar</button>
                    <StyleLink href="/sign-in">Já tem uma conta? Entre agora!</StyleLink>
                </Form>
            </ContainerSignUp>
        </Page>
    );
}

const Page = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#cad4ff;
`;

const ContainerSignUp = styled.div`
    height: 80%;
    width: 25%;
    background-color: #edeeff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 5% 0%;
    border-radius: 20px;
    box-shadow: 3px 5px 30px 10px rgba(99,176,255, 0.5);
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #5e6fc2;
    }
    @media (max-width: 1300px) {
        width: 30%;
    }
    @media (max-width: 1000px) {
        width: 45%;
    }
    @media (max-width: 800px) {
        width: 55%;
    }
    @media (max-width: 600px) {
        width: 65%;
    }
    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
    @media (max-height: 600px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 70%;
    align-items: center;
    justify-content: center;
    span{
        margin-top: 10px;
        font-size: 11px;
        color: #ee3951;
        display: ${props => props.error ? 'flex' : 'none'};
    }
    input{
        box-sizing: border-box;
        width: 100%;
        height: 25%;
        background-color: ${props => props.click ? "#F2F2F2" : "#FFFFFF"};
        border-radius: 5px;
        border: none;
        margin-top: 3%;
        padding: 0px 15px;
        font-size: 20px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        color: ${props => props.click ? "#AFAFAF" : "#000000"};
    }
    button{
        width: 100%;
        height: 20%;
        margin: 7% 0%;
        background-color: #5e6fc2;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #fff;
        opacity: ${props => props.click ? "0.7" : "1"};
    }
    @media (max-width: 500px) {
        input{
            height: 15%;
        }
        button{
            height: 10%;
        }
    }
`;

const StyleLink = styled(Link)`
    color: #000;
    text-decoration: none;
`;
