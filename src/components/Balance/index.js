'use client';

import { Container, Options, ButtonStart, ButtonEnd } from './styles';
import { AiOutlinePlusCircle, AiOutlineMinusCircle, AiOutlineHistory } from 'react-icons/ai';
import Transaction from '../Transaction';
import { useState } from 'react';
import Historic from '../Historic';

export default () => {
    const [clickTransaction, setClickTransaction] = useState(false);
    const [clickHistoric, setClickHistoric] = useState(false);
    const [type, setType] = useState();

 return (
    <Container click={clickTransaction || clickHistoric}>
        <Options>
            <ButtonStart onClick={() => {setClickTransaction(false); setClickHistoric(false)}}>Saldo</ButtonStart>
            <ButtonEnd onClick={() => {setClickTransaction(false); setClickHistoric(true)}}>Histórico <span><AiOutlineHistory /></span></ButtonEnd>
        </Options>
        <h4>
            R$ 200,00
        </h4>
        <Historic clickHistoric={clickHistoric}/>
        <Transaction clickTransaction={clickTransaction} type={type}/>
        <Options>
            <ButtonStart onClick={() => {setClickHistoric(false); setClickTransaction(true); setType("Input")}}>Entrada  <span><AiOutlinePlusCircle/></span></ButtonStart>
            <ButtonEnd onClick={() => {setClickHistoric(false); setClickTransaction(true); setType("Output")}}>Saída <span><AiOutlineMinusCircle/></span></ButtonEnd>
        </Options>
    </Container>
 );
}