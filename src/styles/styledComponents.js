import styled from 'styled-components';
import Link from 'next/link';
import { TbCameraPlus } from 'react-icons/tb';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdExit } from 'react-icons/io';

export const Page = styled.main`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #001f36;
`;

export const Container = styled.div`
    height: 80%;
    width: 25%;
    background-color: #edeeff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 5% 0%;
    border-radius: 20px;
    box-shadow: 3px 5px 30px 10px rgba(99,176,255, 0.5);
    @media (max-width: 1300px) {
        width: 30%;
    }
    @media (max-width: 1000px) {
        width: 45%;
    }
    @media (max-width: 800px) {
        width: 55%;
    }
    @media (max-width: 600px) {
        width: 65%;
    }
    @media (max-width: 500px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
    @media (max-height: 600px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;

export const Titulo = styled.h1`
    font-size: 32px;
    line-height: 50px;
    color: #1c5560;
    font-weight: 700;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    align-items: center;
    justify-content: center;
    span{
        margin-top: 10px;
        font-size: 11px;
        color: #ee3951;
        display: ${props => props.error ? 'flex' : 'none'};
    }
    input{
        box-sizing: border-box;
        background-color: #fbffcd;
        width: 100%;
        height: 15%;
        background-color: ${props => props.click ? "#F2F2F2" : "#FFFFFF"};
        border-radius: 5px;
        border: none;
        margin-top: 3%;
        padding: 0px 15px;
        font-size: 20px;
        line-height: 23px;
        color: ${props => props.click ? "#AFAFAF" : "#000000"};
        font-family: 'Times New Roman', Times, serif;
    }
    button{
        width: 100%;
        height: 15%;
        margin: 7% 0%;
        background-color: #1c5560;
        border-radius: 5px;
        border: none;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #fbffcd;
        opacity: ${props => props.click ? "0.7" : "1"};
        font-family: 'Times New Roman', Times, serif;
    }
    label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15vh;
        height: 15vh;
        background-color: #79ae92;
        border-radius: 100%;
        margin-bottom: 5%;
        img{
            width: 100%;
            height: 100%;
            border-radius: 100%;
            display: ${props => props.filedataurl ? "flex" : "none"};
        }
    }
    @media (max-width: 500px) {
        button{
            height: 10%;
        }
    }
`;

export const InputNone = styled.input`
    display: none;
`;

export const StyleLink = styled(Link)`
    color: #1c5560;
    text-decoration: none;
`;

export const StyleTbCameraPlus = styled(TbCameraPlus)`
    color: #fbffcd;
    font-size: 5vh;
    display: ${props => !props.filedataurl ? "flex" : "none"};
`;

export const Header = styled.div`
    height: 10%;
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
        color: #fbffcd;
        font-weight: 700;
    }
`;

export const PageIndex = styled.main`
    height: 100%;
    width: 100%;
`;

export const StyleBsFillPersonFill = styled(BsFillPersonFill)`
    color: #001f36;
    font-size: 4vh;
    display: ${props => !props.imageurl ? "flex" : "none"};
`;

export const Avatar = styled.div`
    width: 6vh;
    height: 6vh;
    border-radius: 100%;
    background-color: ${props => props.imageurl ? "" : "#fbffcd"};
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.imageurl ? props.imageurl : ""});
    background-size: 6vh;
    background-repeat: no-repeat;
`;

export const Menu = styled.div`
    width: 18vh;
    height: 15vh;
    position: absolute;
    z-index: 1;
    top: 11%;
    right: 1%;
    background-color: #fbffcd;
    border-radius: 5%;
    box-shadow: 1px 2px 15px 5px rgba(0,0,0, 0.5);
    display: ${props => props.click ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #001f36;
        font-size: 3vh;
        font-weight: 700;
        height: 5%;
        width: 100%;
        cursor: pointer;
    }
`;

export const StyleIoMdExit = styled(IoMdExit)`
   margin-left: 5%;
`;

export const ConatinerNameAvatar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
        font-size: 20px;
        line-height: 50px;
        color: #fbffcd;
        margin-right: 2vh;
    }
`;
// .color1 { #000000 };
// .color2 { #001f36 };
// .color3 { #1c5560 };
// .color4 { #79ae92 };
// .color5 { #fbffcd };