'use client';

import { useContext, useEffect, useState } from "react";
import { PageIndex, ContainerBody } from './styles';
import { UserContext } from "@/contexts/UserContext";
import Balance from "../Balance";
import Chart from "../Chart";
import Header from "../Header";

export default () => {
    const { userData, setUserData } = useContext(UserContext);
    const [click, setClick] = useState(false);

    useEffect(() => {
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
            <Header click={click} setClick={setClick}/>
            <ContainerBody  onClick={() => setClick(false)}>
                <Balance />
                <Chart />
            </ContainerBody>
        </PageIndex>
    )
}
