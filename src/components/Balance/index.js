'use client';

import { Container, Options, ButtonStart, ButtonEnd } from './styles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineHistory } from 'react-icons/ai';
import Transaction from '../Transaction';
import { useState } from 'react';
import Historic from '../Historic';

export default function Balance({ setSeries, setNotificationsArray, balanceTotal, historicArray, setHistoricArray, setBalanceTotal }) {
    const [clickTransaction, setClickTransaction] = useState(false);
    const [clickHistoric, setClickHistoric] = useState(false);
    const [type, setType] = useState();

    return (
        <Container click={clickTransaction || clickHistoric}>
            <Options>
                <ButtonStart onClick={() => { setClickTransaction(false); setClickHistoric(false) }}>Saldo</ButtonStart>
                <ButtonEnd onClick={() => { setClickTransaction(false); setClickHistoric(true) }}>Histórico <span><AiOutlineHistory /></span></ButtonEnd>
            </Options>
            <h4>
                R$ {balanceTotal}
            </h4>
            <Historic clickHistoric={clickHistoric} historicArray={historicArray} setHistoricArray={setHistoricArray} setBalanceTotal={setBalanceTotal} setSeries={setSeries}/>
            <Transaction clickTransaction={clickTransaction} type={type} setClickTransaction={setClickTransaction} setBalanceTotal={setBalanceTotal} setHistoricArray={setHistoricArray} setSeries={setSeries} setNotificationsArray={setNotificationsArray}/>
            <Options>
                <ButtonStart onClick={() => { setClickHistoric(false); setClickTransaction(true); setType("INPUT") }}>Entrada  <span><AiOutlinePlusCircle /></span></ButtonStart>
                <ButtonEnd onClick={() => { setClickHistoric(false); setClickTransaction(true); setType("OUTPUT") }}>Saída <span><AiOutlineMinusCircle /></span></ButtonEnd>
            </Options>
        </Container>
    );
}