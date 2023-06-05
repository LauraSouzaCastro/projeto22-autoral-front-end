import styled from "styled-components";

export const Container = styled.div`
    display: ${props => props.click ? "flex" : "none"};
    flex-direction: column;
    
`