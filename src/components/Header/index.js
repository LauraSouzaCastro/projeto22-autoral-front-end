'use client';

import { useContext, useEffect, useState } from "react";
import { HeaderContainer, StyleBsFillPersonFill, Menu, Avatar, StyleIoMdExit, ConatinerNameAvatar } from './styles';
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";

export default ({ click, setClick }) => {
    const { userData, setUserData } = useContext(UserContext);
    const [imageUrl, setImageUrl] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (userData.user.image) {
            setImageUrl(`${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads/${userData.user.image}`);
        }
    }, [userData]);
    return (
        <HeaderContainer>
            <h1>SmartWallet</h1>
            <ConatinerNameAvatar>
                <h2>
                    {userData.user.name ? `Olá, ${userData.user.name}!` : "Olá"}
                </h2>
                <Avatar onClick={() => setClick(!click)} imageurl={imageUrl}>
                    <StyleBsFillPersonFill imageurl={imageUrl} />
                </Avatar>
            </ConatinerNameAvatar>
            <Menu click={click}>
                <p onClick={() => router.push('/profile')}>Perfil</p>
                <p onClick={() => { setUserData({user:{}}); router.push('/smart-wallet') }}>Sair <StyleIoMdExit /></p>
            </Menu>
        </HeaderContainer>
    )
}
