import styled from 'styled-components';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdExit } from 'react-icons/io';

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
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

export const StyleBsFillPersonFill = styled(BsFillPersonFill)`
    color: #001f36;
    font-size: 4vh;
    display: ${props => !props.imageurl ? "flex" : "none"};
    @media (max-width: 515px) {
        font-size: 2vh;
    }
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
    @media (max-width: 515px) {
        width: 4vh;
        height: 4vh;
        background-size: 4vh;
    }
`;

export const Menu = styled.div`
    width: 18vh;
    height: 15vh;
    position: absolute;
    z-index: 1;
    top: 110%;
    right: 1%;
    background-color: #edeeff;
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
        color: #edeeff;
        margin-right: 2vh;
        @media (max-width: 515px) {
            font-size: 13x;
            line-height: 40px;
            margin-right: 1vh;
        }
    }
`;