import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.click ? "flex" : "none"};
    flex-direction: column;
    width: 100%;
    height: 80%;
    padding: 0 2vh;
    font-size: 20px;
    overflow: auto; 
    h1{
        margin: auto;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5vh;
        span{
            margin-right: 2vh;
        }
    }
`