import { Page, Form, StyleLink, Container, Titulo } from "@/styles/styledComponents";
import { useState } from "react";
import useSignUp from '@/hooks/api/useSignUp';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const { signUp } = useSignUp();
    const [signupData, setSignupData] = useState({ email: "", password: "", passwordConfirm: "" });
    const [error, setError] = useState('');
    const [click, setClick] = useState(false);
    const router = useRouter();

    async function signUpButton(event) {
        event.preventDefault();
        setClick(true);
        setError('');
        if (signupData.password === signupData.passwordConfirm) {
            try {
                await signUp({ email: signupData.email, password: signupData.password });
                setSignupData({ email: "", password: "", passwordConfirm: "" });
                router.push('/sign-in');
            } catch (err) {
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
            <Container>
                <Titulo>SmartWallet</Titulo>
                <Form onSubmit={signUpButton} click={click} error={error}>
                    <input disabled={click} required type="email" placeholder="E-mail" value={signupData.email} onChange={e => setSignupData({ ...signupData, email: e.target.value })} />
                    <input disabled={click} required type="password" placeholder="Senha" value={signupData.password} onChange={e => setSignupData({ ...signupData, password: e.target.value })} />
                    <input disabled={click} required type="password" placeholder="Confirme a senha" value={signupData.passwordConfirm} onChange={e => setSignupData({ ...signupData, passwordConfirm: e.target.value })} />

                    <span>{error}</span>

                    <button disabled={click} type="submit">Cadastrar</button>
                    <StyleLink href="/sign-in">Já tem uma conta? Entre agora!</StyleLink>
                </Form>
            </Container>
        </Page>
    );
}
