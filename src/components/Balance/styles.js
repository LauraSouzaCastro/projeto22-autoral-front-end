import styled from 'styled-components';

export const Container = styled.div`
    width: 65vh;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fffffe;
    color: #001f36;
    box-shadow: 1px 2px 15px 5px rgba(0,0,0, 0.1);
    margin: 1vh;
    h4{
        display: ${props => !props.click ? "flex" : "none"};
        padding: 0% 5%;
        font-size: 7vh;
    }
    @media (max-width: 515px) {
        width: 100%;
        margin: 0;
        height: 39.7vh;
        box-shadow: none;
        border-bottom: 2px solid #001f36;
    }
`;

export const Options = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button{
        height: 5vh;
        width: 50%;
        border: none;
        background-color: #fffffe;
        color: #001f36;
        display: flex;
        align-items: center;
        padding: 5%;
        font-size: 25px;
        font-family: 'Times New Roman', Times, serif;
        span{
            display: flex;
            align-items: center;
            margin-left: 2vh;
        }
    }
`;

export const ButtonStart = styled.button`
    justify-content: flex-start;
`;

export const ButtonEnd = styled.button`
    justify-content: flex-end;
`;