'use client';

import React from "react";

import { ChartStyled } from "./styles";

export default function Chart({ series }) {
    var meio = Math.floor(series.find(s => s.name == 'Saldo').data.length / 2);
    var elementoDoMeio = series.find(s => s.name == 'Saldo').data[meio];
    
    const options = {
        chart: {
            locales: [{
                "name": "pt-br",
                "options": {
                    "months": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Oututubro", "Novembro", "Dezembro"],
                    "shortMonths": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
                    "days": ["Domingo", "Sengunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
                    "shortDays": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                }
            }],
            defaultLocale: "pt-br",
            type: 'line',
            background: '#fff',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            },
            toolbar: {
                show: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            show: true,
            borderColor: '#E7E5DF',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },
            yaxis: {
                lines: {
                    show: true
                }
            },
            padding: {
                top: 10,
                right: 20,
                bottom: 15,
                left: 15
            },
        },
        xaxis: {
            type: 'datetime',
            range: 86400000 * 30,
            min: new Date(elementoDoMeio.x).getTime() - (15 * 24 * 60 * 60 * 1000),
            max: new Date(elementoDoMeio.x).getTime() + (15 * 24 * 60 * 60 * 1000)
        },
        yaxis: [{
            title: {
                text: 'Reais (R$)',
            }
        }],
    };

    return (
        <ChartStyled
            options={options}
            series={series}
            type="line"
            width="100%"
            height="100%"
        />
    );
}