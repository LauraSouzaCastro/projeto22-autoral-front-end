import styled from 'styled-components';

export const PageIndex = styled.main`
    height: 100%;
    width: 100%;
`;

export const ContainerBody = styled.div`
    padding-top: 15vh;
    padding-bottom: 12vh;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 515px) {
        height: 100%;
        padding-bottom: 0;
        padding-top: 10vh;
        justify-content: flex-start;
        flex-direction: column;
    }
`;

export const ContainerChart = styled.div`
    width: 80vh;
    height: 50vh;
    margin: 1vh;
    @media (max-width: 515px) {
        width: 100%;
        margin: 0;
        height: 50vh;
        box-shadow: none;
    }
`;