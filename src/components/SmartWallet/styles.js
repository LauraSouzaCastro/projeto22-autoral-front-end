import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    h2{
        position: absolute;
        color: #edeeff;
        top: 14vh;
        z-index: 1;
        width: 30%;
        left: 10vh;
        text-align: justify;
        text-shadow: rgb(99,176,255) 0.1em 0.1em 0.5em;
    }
    h3{
        position: absolute;
        color: #edeeff;
        top: 14vh;
        z-index: 1;
        width: 20%;
        text-align: justify;
        right: 10vh;
        text-shadow: rgb(99,176,255) 0.1em 0.1em 0.5em;
    }
`;

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: 10vh;
    width: 100%;
    background-color: #001f36;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0% 4%;
    box-shadow: 1px 2px 15px 5px rgba(0,0,0, 0.5);
    h1{
        font-size: 32px;
        line-height: 50px;
        color: #edeeff;
        font-weight: 700;
    }
`;

export const ButtonSignUp = styled.button`
    border: none;
    background-color: #edeeff;
    color: #001f36;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.5vh;
    border-radius: 1vh;
    height: 5vh;
    width: 15vh;
`;

export const ButtonSignIn = styled.button`
    background-color: #001f36;
    border: none;
    color: #edeeff;
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.4vh;
    margin-right: 3vh;
`;