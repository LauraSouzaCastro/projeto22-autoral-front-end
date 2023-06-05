import styled from 'styled-components';
import { TbCameraPlus } from 'react-icons/tb';

export const InputNone = styled.input`
    display: none;
`;

export const StyleTbCameraPlus = styled(TbCameraPlus)`
    color: #fbffcd;
    font-size: 5vh;
    display: ${props => !props.filedataurl ? "flex" : "none"};
`;