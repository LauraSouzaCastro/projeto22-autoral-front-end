'use client';

import { Page, HeaderContainer, ButtonSignIn, ButtonSignUp } from "./styles";
import { useRouter } from 'next/router';

export default function SmartWallet () {
    const router = useRouter();

    return (
        <Page>
            <HeaderContainer>
                <h1>SmartWallet</h1>
                <div>
                    <ButtonSignIn onClick={() => router.push('/sign-in')}>Entrar</ButtonSignIn>
                    <ButtonSignUp onClick={() => router.push('/sign-up')}>Cadastrar</ButtonSignUp>
                </div>
            </HeaderContainer>
            <h2>
                <p>Bem-vindo à SmartWallet! Aqui, você encontrará a solução perfeita para controlar suas finanças pessoais e tomar decisões inteligentes com seu dinheiro. Nosso objetivo é fornecer uma plataforma intuitiva e poderosa que permita aos usuários registrar seus ganhos e gastos de forma simples e eficiente.</p>
                <p>Com nosso sistema fácil de usar, você poderá inserir rapidamente todas as suas transações financeiras, categorizá-las e acompanhar seu orçamento. Além disso, oferecemos uma funcionalidade exclusiva de gráficos, onde você poderá visualizar seus dados em tempo real por meio de gráficos claros e informativos.</p>
            </h2>
            <h3>
                <p>Através dos gráficos, você poderá identificar padrões de gastos, detectar áreas onde está gastando mais do que deveria e tomar medidas para economizar dinheiro.</p>
                <p>Então, comece agora mesmo a tomar o controle das suas finanças! Registre-se gratuitamente e aproveite todos os recursos que oferecemos para ajudá-lo a atingir uma vida financeira mais saudável e estável.</p>
            </h3>
            <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/grafico-background.jpg`} />
        </Page>
    );
}