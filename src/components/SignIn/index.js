'use client';

import { Page, Form, Container, StyleLink, Titulo } from "@/styles/styledComponents";
import { useState, useContext } from "react";
import { useSessions, useSignIn } from '@/hooks/api/useSignIn';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/contexts/UserContext';

export default () => {
    const { signIn } = useSignIn();
    const [signInData, setsignInData] = useState({ email: "", password: "" });
    const [error, setError] = useState('');
    const [click, setClick] = useState(false);
    const router = useRouter();
    const { setUserData } = useContext(UserContext);
    const { listSessions } = useSessions();

    async function signInButton(event) {
        event.preventDefault();
        setClick(true);
        setError('');
        try {
            const userData = await signIn({ email: signInData.email, password: signInData.password });
            setUserData(userData);
            setsignInData({ email: "", password: "" });
            const sessions = await listSessions(userData.token);
            if (sessions.length > 1) {
                router.push('/');
            } else {
                router.push('/profile');
            }
        } catch (err) {
            setError('Email e/ou senha incorreta(s)');
        }
        setClick(false);
    }
    return (
        <Page>
            <Container>
                <Titulo>SmartWallet</Titulo>
                <Form onSubmit={signInButton} click={click} error={error}>
                    <input disabled={click} required type="email" placeholder="E-mail" value={signInData.email} onChange={e => setsignInData({ ...signInData, email: e.target.value })} />
                    <input disabled={click} required type="password" placeholder="Senha" value={signInData.password} onChange={e => setsignInData({ ...signInData, password: e.target.value })} />

                    <span>{error}</span>

                    <button disabled={click} type="submit">Entrar</button>
                    <StyleLink href="/sign-up">Primeira vez? Cadastre-se!</StyleLink>
                </Form>
            </Container>
        </Page>
    );
}
