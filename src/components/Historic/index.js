'use client';

import dayjs from 'dayjs';
import { useDataGrafic, useDeleteTransaction, useHistoric } from '@/hooks/api/useTransactions';
import { Container } from './styles';
import { MdDelete } from 'react-icons/md';
import { useBalance } from '@/hooks/api/useBalance';

export default function Historic({ clickHistoric, historicArray, setHistoricArray, setBalanceTotal, setSeries }) {
    const { listHistoric } = useHistoric();
    const { deleteTransaction, deleteTransactionLoading } = useDeleteTransaction();
    const { listBalance } = useBalance();
    const { listDataGrafic } = useDataGrafic();

    async function deleteTransactionButton(transactionId){
        try {
            await deleteTransaction(transactionId);
            const historic = await listHistoric();
            setHistoricArray(historic);
            const balance = await listBalance();
            setBalanceTotal(Number(balance.value).toFixed(2).replace(".", ","));
            const dataGrafic = await listDataGrafic();
            setSeries(dataGrafic);
          } catch (err) {
            console.log(err);
          }
    }

    return (
        <Container click={clickHistoric}>
            {historicArray.length ? historicArray.map((transaction) => {
                const data = dayjs(transaction.dateTransaction);
                return (
                    <div key={transaction.id}>
                        <span>{data.format('DD/MM')}</span>
                        <span>{transaction.Category.name}</span>
                        <div>
                            <span>R$ {Number(transaction.value).toFixed(2).replace(".", ",")}</span>
                            <MdDelete onClick={() => !deleteTransactionLoading && deleteTransactionButton(transaction.id)}/>
                        </div>
                    </div>
                );
            }) : <h1>Nenhuma transação concluída</h1>}


        </Container>
    );
}