'use client';

import { Container, Options, ButtonStart, ButtonEnd } from './styles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineHistory } from 'react-icons/ai';
import Transaction from '../Transaction';
import { useEffect, useState } from 'react';
import Historic from '../Historic';
import { useBalance } from '@/hooks/api/useBalance';
import { useHistoric } from '@/hooks/api/useHistoric';

export default function Balance() {
    const [clickTransaction, setClickTransaction] = useState(false);
    const [clickHistoric, setClickHistoric] = useState(false);
    const [type, setType] = useState();
    const { balance, balanceLoading } = useBalance();
    const [ balanceTotal, setBalanceTotal ] = useState(!balanceLoading ? balance.value.replace(".", ",") : "0,00")
    const { historic, historicLoading } = useHistoric();
    const [ historicArray, setHistoricArray ] = useState(!historicLoading && historic);
    useEffect(() => {
        if(!balanceLoading) setBalanceTotal(balance.value.replace(".", ","));
        if(!historicLoading) setHistoricArray(historic);
    }, [ balanceLoading, historicLoading ]);

    return (
        <Container click={clickTransaction || clickHistoric}>
            <Options>
                <ButtonStart onClick={() => { setClickTransaction(false); setClickHistoric(false) }}>Saldo</ButtonStart>
                <ButtonEnd onClick={() => { setClickTransaction(false); setClickHistoric(true) }}>Histórico <span><AiOutlineHistory /></span></ButtonEnd>
            </Options>
            <h4>
                R$ {balanceTotal}
            </h4>
            <Historic clickHistoric={clickHistoric} historicArray={historicArray} setHistoricArray={setHistoricArray} setBalanceTotal={setBalanceTotal}/>
            <Transaction clickTransaction={clickTransaction} type={type} setClickTransaction={setClickTransaction} setBalanceTotal={setBalanceTotal} setHistoricArray={setHistoricArray}/>
            <Options>
                <ButtonStart onClick={() => { setClickHistoric(false); setClickTransaction(true); setType("INPUT") }}>Entrada  <span><AiOutlinePlusCircle /></span></ButtonStart>
                <ButtonEnd onClick={() => { setClickHistoric(false); setClickTransaction(true); setType("OUTPUT") }}>Saída <span><AiOutlineMinusCircle /></span></ButtonEnd>
            </Options>
        </Container>
    );
}