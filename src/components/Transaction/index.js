'use client';

import { useState } from "react";
import { InputColor, Form } from "./styles";
import { useCategories } from "@/hooks/api/useCategories";
import { useDataGrafic, useTransactions } from "@/hooks/api/useTransactions";
import { useBalance } from "@/hooks/api/useBalance";
import { useHistoric } from "@/hooks/api/useTransactions";

export default function Transaction({ type, clickTransaction, setClickTransaction, setBalanceTotal, setHistoricArray, setSeries }) {
    const { categories, categoriesLoading, listCategories } = useCategories();
    const { transactions } = useTransactions();
    const [dataTransaction, setDataTransaction] = useState({ value: '', categoryName: '', color: '#000000', dateTransaction: '', done: false });
    const [click, setClick] = useState(false);
    const { listBalance } = useBalance();
    const { listHistoric } = useHistoric();
    const { listDataGrafic } = useDataGrafic();

    async function transactionButton(event) {
        event.preventDefault();
        setClick(true);
        try {
            const data = {
                ...dataTransaction,
                typeTransaction: type,
                categoryId: categories.find(c => c.name === dataTransaction.categoryName) ? categories.find(c => c.name === dataTransaction.categoryName).id : 0
            }
            await transactions(data);
            setDataTransaction({ value: '', categoryName: '', color: '#000000', dateTransaction: '', done: false });
            const balance = await listBalance();
            setBalanceTotal(balance.value.replace(".", ","));
            await listCategories();
            const historic = await listHistoric();
            setHistoricArray(historic);
            const dataGrafic = await listDataGrafic();
            setSeries(dataGrafic);
            setClickTransaction(false);
            setClick(false);
        } catch (err) {
            console.log(err);
        }
        setClick(false);
    }
    
    return (
        <Form onSubmit={transactionButton} click={clickTransaction}>
            <input required disabled={click} type="number" min="0.01" step="0.01" placeholder="Valor" value={dataTransaction.value} onChange={e => setDataTransaction({ ...dataTransaction, value: e.target.value })} />
            <input required disabled={click} type="text" placeholder="Nome da categoria" list="categorias" value={dataTransaction.categoryName} onChange={e => setDataTransaction({ ...dataTransaction, categoryName: e.target.value, color: categories.find(c => c.name === e.target.value) ? categories.find(c => c.name === e.target.value).color : '#000000' })} />
            <datalist id="categorias">
                {!categoriesLoading && categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)}
            </datalist>
            <label>
                <span>Cor da categoria: </span>
                <InputColor disabled={click} required type="color" value={dataTransaction.color} onChange={e => setDataTransaction({ ...dataTransaction, color: e.target.value })} />
            </label>
            <label>
                <span>Data da transação: </span>
                <input disabled={click} required type="date" value={dataTransaction.dateTransaction} onChange={e => setDataTransaction({ ...dataTransaction, dateTransaction: e.target.value })} />
            </label>
            <label>
                <span>Transação feita: </span>
                <input disabled={click} type="checkbox" checked={dataTransaction.done} onChange={e => setDataTransaction({ ...dataTransaction, done: e.target.checked })} />
            </label>

            <button disabled={click} type="submit">Registrar {type === 'INPUT' ? 'Entrada' : 'Saída'}</button>
        </Form>
    );
}