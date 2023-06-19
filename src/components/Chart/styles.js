import styled from 'styled-components';
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const ChartStyled = styled(Chart)`
`;
