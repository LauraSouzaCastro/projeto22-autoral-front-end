'use client';

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function WalletChart() {
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
            height: 350,
            width: 350,
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
        },
        yaxis: [{
            title: {
                text: 'Reais (R$)',
            }
        }]
    };
    const [series, setSeries] = useState([
        {
            name: 'Saldo',
            type: 'line',
            color: '#000',
            stroke: {
                width: 4
            },
            data: [
                {
                    x: new Date('2023-05-14T03:24:00'),
                    y: -70
                },
                {
                    x: new Date('2023-05-17T03:24:00'),
                    y: 250
                }, {
                    x: new Date('2023-05-20T03:24:00'),
                    y: 600
                }, {
                    x: new Date('2023-05-23T03:24:00'),
                    y: 510
                }, {
                    x: new Date('2023-05-25T03:24:00'),
                    y: 910
                }, {
                    x: new Date('2023-05-26T03:24:00'),
                    y: 860
                }, {
                    x: new Date('2023-05-28T03:24:00'),
                    y: 820
                }, {
                    x: new Date('2023-05-29T03:24:00'),
                    y: 780
                }, {
                    x: new Date('2023-05-30T03:24:00'),
                    y: 880
                }, {
                    x: new Date('2023-05-31T03:24:00'),
                    y: 730
                }, {
                    x: new Date('2023-06-04T03:24:00'),
                    y: 630
                },
            ]
        },
        {
            name: 'Entradas',
            type: 'column',
            color: '#31EB69',
            stroke: {
                width: 4
            },
            data: [{
                x: new Date('2023-05-17T03:24:00'),
                y: 320
            }, {
                x: new Date('2023-05-20T03:24:00'),
                y: 350
            }, {
                x: new Date('2023-05-25T03:24:00'),
                y: 400
            }, {
                x: new Date('2023-05-30T03:24:00'),
                y: 100
            },
            ]
        },
        {
            name: 'Casa',
            type: 'column',
            color: '#EB2726',
            position: 'back',
            stroke: {
                width: 4
            },
            data: [{
                x: new Date('2023-05-17T03:24:00'),
                y: 20
            }, {
                x: new Date('2023-05-26T03:24:00'),
                y: 50
            }, {
                x: new Date('2023-05-28T03:24:00'),
                y: 40
            }, {
                x: new Date('2023-05-31T03:24:00'),
                y: 150
            },
            ]
        },
        {
            name: 'Comida',
            type: 'column',
            color: '#EB2726',
            stroke: {
                width: 4
            },
            data: [{
                x: new Date('2023-05-14T03:24:00'),
                y: 70
            }, {
                x: new Date('2023-05-23T03:24:00'),
                y: 90
            }, {
                x: new Date('2023-05-29T03:24:00'),
                y: 40
            }, {
                x: new Date('2023-06-04T03:24:00'),
                y: 100
            },
            ]
        }
    ]);

    return (
        <div>
            <Chart
                options={options}
                series={series}
                type="line"
                height={350}
                width={500}
            />
        </div>
    );
}