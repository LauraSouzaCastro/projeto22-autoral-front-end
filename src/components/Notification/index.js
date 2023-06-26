'use client';

import { useDataGrafic, useDeleteTransaction, useHistoric, useNotifications, useUpdateTransaction } from '@/hooks/api/useTransactions';
import { Container } from './styles';
import { MdDelete } from 'react-icons/md';
import dayjs from 'dayjs';
import { useBalance } from '@/hooks/api/useBalance';

export default function Notification({ clickNotification, notificationsArray, setNotificationsArray, setBalanceTotal, setHistoricArray, setSeries }) {
    const { deleteTransaction, deleteTransactionLoading } = useDeleteTransaction();
    const { listNotifications } = useNotifications();
    const { updateTransaction } = useUpdateTransaction();
    const { listHistoric } = useHistoric();
    const { listBalance } = useBalance();
    const { listDataGrafic } = useDataGrafic();

    async function deleteTransactionButton(transactionId) {
        try {
            await deleteTransaction(transactionId);
            const notifications = await listNotifications();
            setNotificationsArray(notifications);
        } catch (err) {
            console.log(err);
        }
    }

    async function updateTransactionButton(done, transactionId) {
        if (done) {
            try {
                await updateTransaction(transactionId);
                const balance = await listBalance();
                setBalanceTotal(Number(balance.value).toFixed(2).replace(".", ","));
                const historic = await listHistoric();
                setHistoricArray(historic);
                const dataGrafic = await listDataGrafic();
                setSeries(dataGrafic);
                const notifications = await listNotifications();
                setNotificationsArray(notifications);
            } catch (err) {
                console.log(err);
            }
        }

    }

    return (
        <Container click={clickNotification}>
            {notificationsArray.length ? notificationsArray.map((notification) => {
                const data = dayjs(notification.dateTransaction);
                return (
                    <div key={notification.id}>
                        <span>{data.format('DD/MM')}</span>
                        <span>{notification.Category.name}</span>
                        <div>
                            <span>R$ {Number(notification.value).toFixed(2).replace(".", ",")}</span>
                            <input type="checkbox" checked={false} onChange={e => updateTransactionButton(e.target.checked, notification.id)} />
                            <MdDelete onClick={() => !deleteTransactionLoading && deleteTransactionButton(notification.id)} />
                        </div>
                    </div>
                );
            }) : <h1>Sem notificações</h1>}
        </Container>
    );
}