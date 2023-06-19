'use client';

import { useContext, useEffect, useState } from "react";
import { PageIndex, ContainerBody, ContainerChart } from './styles';
import { UserContext } from "@/contexts/UserContext";
import Balance from "../Balance";
import Chart from "../Chart";
import Header from "../Header";
import { useDataGrafic } from "@/hooks/api/useTransactions";

export default function Home() {
    const { userData, setUserData } = useContext(UserContext);
    const [click, setClick] = useState(false);
    const { dataGrafic, dataGraficLoading } = useDataGrafic()
    const [series, setSeries] = useState([]);

    useEffect(() => {
        if (!dataGraficLoading) setSeries(dataGrafic);
        // setTimeout(() => {
        //     if (!("Notification" in window)) {
        //         alert("Este browser não suporta notificações de Desktop");
        //     } else if (Notification.permission === "granted") {
        //         var notification = new Notification("Hi there!");
        //     } else if (Notification.permission !== 'denied') {
        //         Notification.requestPermission(function (permission) {
        //             // If the user accepts, let's create a notification
        //             if (permission === "granted") {
        //                 var notification = new Notification("Hi there!");
        //             }
        //         });
        //     }
        // }, 5000);
    }, [userData, dataGraficLoading]);
    return (
        <PageIndex>
            <Header click={click} setClick={setClick} />
            <ContainerBody onClick={() => setClick(false)}>
                <Balance setSeries={setSeries} />
                <ContainerChart>
                    <Chart series={series} />
                </ContainerChart>
            </ContainerBody>
        </PageIndex>
    )
}
