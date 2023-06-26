'use client';

import { useContext, useEffect, useState } from "react";
import { HeaderContainer, StyleBsBellFill, StyleBsBell, StyleBsFillPersonFill, Menu, Avatar, StyleIoMdExit, ConatinerNameAvatar } from './styles';
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import Notification from "../Notification";

export default function Header({ clickMenu, setClickMenu, clickNotification, setClickNotification, notificationsArray, setNotificationsArray, setBalanceTotal, setHistoricArray, setSeries }) {
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
                {notificationsArray.length < 1 ? <StyleBsBell onClick={() => {setClickNotification(!clickNotification); setClickMenu(false)}}/> : <StyleBsBellFill onClick={() => {setClickNotification(!clickNotification); setClickMenu(false)}}/>}
                <Avatar onClick={() => {setClickMenu(!clickMenu); setClickNotification(false)}} imageurl={imageUrl}>
                    <StyleBsFillPersonFill imageurl={imageUrl} />
                </Avatar>
            </ConatinerNameAvatar>
            <Notification clickNotification={clickNotification} notificationsArray={notificationsArray} setNotificationsArray={setNotificationsArray} setSeries={setSeries} setHistoricArray={setHistoricArray} setBalanceTotal={setBalanceTotal}/>
            <Menu clickmenu={clickMenu}>
                <p onClick={() => router.push('/profile')}>Perfil</p>
                <p onClick={() => { setUserData({ user: {} }); router.push('/smart-wallet') }}>Sair <StyleIoMdExit /></p>
            </Menu>
        </HeaderContainer>
    )
}
