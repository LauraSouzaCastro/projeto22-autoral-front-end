import WalletChart from "@/components/WalletChart"
import { useContext, useEffect, useState } from "react";
import { Header, PageIndex, StyleBsFillPersonFill, Menu, Avatar, StyleIoMdExit, ConatinerNameAvatar } from "@/styles/styledComponents";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";

export default function Home() {
    const { userData, setUserData } = useContext(UserContext);
    const [imageUrl, setImageUrl] = useState(null);
    const [click, setClick] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (userData.user.image) {
            setImageUrl(`${process.env.REACT_APP_API_BASE_URL}/uploads/${userData.user.image}`);
        }
        setTimeout(() => {
            if (!("Notification" in window)) {
                alert("Este browser não suporta notificações de Desktop");
            } else if (Notification.permission === "granted") {
                var notification = new Notification("Hi there!");
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification("Hi there!");
                    }
                });
            }
        }, 5000);
    }, [userData]);
    return (
        <PageIndex>
            <Header>
                <h1>SmartWallet</h1>
                <ConatinerNameAvatar>
                    <h2>
                        {userData.user.name ? `Olá, ${userData.user.name}!`: "Olá"}
                    </h2>
                    <Avatar onClick={() => setClick(!click)} imageurl={imageUrl}>
                        <StyleBsFillPersonFill imageurl={imageUrl} />
                    </Avatar>
                </ConatinerNameAvatar>
                <Menu click={click}>
                    <p onClick={() => router.push('/profile')}>Perfil</p>
                    <p onClick={() => {setUserData({}); router.push('/sign-in')}}>Sair <StyleIoMdExit /></p>
                </Menu>
            </Header>
            <WalletChart />
        </PageIndex>
    )
}
