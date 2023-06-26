'use client';

import { useContext, useEffect, useState } from "react";
import { PageIndex, ContainerBody, ContainerChart } from './styles';
import { UserContext } from "@/contexts/UserContext";
import Balance from "../Balance";
import Chart from "../Chart";
import Header from "../Header";
import { useDataGrafic } from "@/hooks/api/useTransactions";
import { useNotifications } from "@/hooks/api/useTransactions";
import { useBalance } from '@/hooks/api/useBalance';
import { useHistoric } from '@/hooks/api/useTransactions';

export default function Home() {
    const { userData, setUserData } = useContext(UserContext);
    const [clickMenu, setClickMenu] = useState(false);
    const [clickNotification, setClickNotification] = useState(false);
    const { dataGrafic, dataGraficLoading } = useDataGrafic()
    const [series, setSeries] = useState([]);
    const { notifications, notificationsLoading } = useNotifications();
    const [notificationsArray, setNotificationsArray] = useState([]);
    const { balance, balanceLoading } = useBalance();
    const [ balanceTotal, setBalanceTotal ] = useState(!balanceLoading ? Number(balance.value).toFixed(2).replace(".", ",") : "0,00")
    const { historic, historicLoading } = useHistoric();
    const [ historicArray, setHistoricArray ] = useState(!historicLoading && historic);

    useEffect(() => {
        if (!dataGraficLoading) setSeries(dataGrafic);
        if (!notificationsLoading) setNotificationsArray(notifications);
        if(!balanceLoading) setBalanceTotal(Number(balance.value).toFixed(2).replace(".", ","));
        if(!historicLoading) setHistoricArray(historic);
    }, [dataGraficLoading, notificationsLoading, balanceLoading, historicLoading])
    return (
        <PageIndex>
            <Header clickMenu={clickMenu} setClickMenu={setClickMenu} clickNotification={clickNotification} setClickNotification={setClickNotification} notificationsArray={notificationsArray} setNotificationsArray={setNotificationsArray} setSeries={setSeries} setHistoricArray={setHistoricArray} setBalanceTotal={setBalanceTotal}/>
            <ContainerBody onClick={() => {setClickMenu(false); setClickNotification(false)}}>
                <Balance setSeries={setSeries} setNotificationsArray={setNotificationsArray} historicArray={historicArray} setHistoricArray={setHistoricArray} setBalanceTotal={setBalanceTotal} balanceTotal={balanceTotal}/>
                <ContainerChart>
                    <Chart series={series} />
                </ContainerChart>
            </ContainerBody>
        </PageIndex>
    )
}
