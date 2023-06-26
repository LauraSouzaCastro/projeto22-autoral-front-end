import styled from 'styled-components';

export const Container = styled.div`
    width: auto;
    height: auto;
    position: absolute;
    z-index: 1;
    top: 110%;
    right: 5%;
    background-color: #edeeff;
    border-radius: 5%;
    padding: 2vh;
    color: #001f36;
    box-shadow: 1px 2px 15px 5px rgba(0,0,0, 0.5);
    display: ${props => props.click ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    h1{
        margin: auto;
        color: #001f36;
        font-size: 15px;
        font-weight: 400;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 0.5vh;
        span{
            margin-right: 2vh;
        }
        div{
            justify-content: flex-end;
            input{
                margin: 0 1vh;
            }
        }
    }
`;
