import styled from 'styled-components';

export const Form = styled.form`
    display: ${props => props.click ? "flex" : "none"};
    height: 100%;
    flex-direction: column;
    margin: 5vh;
    justify-content: space-between;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance:textfield;
    }
`;

export const InputColor = styled.input`
    border: none;
    height: 2.5vh;
    width: 2.5vh;
    margin: 0;
    padding: 0;
`;