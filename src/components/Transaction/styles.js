import styled from 'styled-components';

export const Form = styled.form`
    display: ${props => props.click ? "flex" : "none"};
    height: 100%;
    flex-direction: column;
    margin: 2vh 5vh;
    justify-content: space-between;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type=number] {
        -moz-appearance:textfield;
    }
    input{
        border: 2px solid #001f36;
        border-radius: 4px;
        height: 4vh;
        color: #001f36;
    }
    button{
        background-color: #001f36;
        border: none;
        color: #edeeff;
        height: 5vh;
        font-family: 'Times New Roman', Times, serif;
        border-radius: 1vh;
        font-size: 15px;
        font-weight: 700;
    }
    label{
        display: flex;
        width: 100%;
        align-items: center;
        span{
            margin-right: 1vh;
        }
    }
`;

export const InputColor = styled.input`
    margin: 0;
    padding: 0;
`;