import React, { useState, useEffect } from "react";
import ReactEcharts from 'echarts-for-react';

const style: any = {
    fontSize: 14,
    fontWeight: '500',
    color: '#1D2129',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: 'calc(100% - 20px)',
}

const lineChart: React.FC<{
    legendValues: string[],
    dataValues: Array<string[]>,
    chartHead: string,
    valueUnit: string,
    xValues: string,
}> = (props) => {
    const { legendValues, dataValues, chartHead, valueUnit, xValues } = props;

    const [option, setOption] = useState({});
    
    useEffect(() => {
        setOption({
            title: {
                text: valueUnit,
                textStyle: {
                    color: '#1D2129',
                    fontSize: 12,
                    fontWeight: '400',
                },
                left: '1%'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legendValues,
                bottom: -5,
                textStyle: {
                    color: '#333',
                    fontSize: 10,
                },
                itemWidth: 15,
                itemHeight: 6,
            },
            grid: {
                top: '12%',
                left: '0',
                right: '8%',
                bottom: '7%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: xValues,
                axisLabel: {
                    color: '#999999',
                    fontSize: 10,
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee',
                    },

                },
            },
            yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                },
                axisLabel: {
                    color: '#999999',
                    fontSize: 10,
                },
            },
            // color: ['#405DF9', '#ED589D'],
            series: dataValues.map((d, index) => ({
                name: legendValues.length > 0 ? legendValues[index] : '',
                type: 'line',
                stack: 'Total',
                symbolSize: 7,
                smooth: true,
                data: d,
            })),
        })
    }, [])
    return (
        <div style={{ position: 'relative', width: '396px', height: '100%' }}>
            <div style={style}>{chartHead}</div>
            <ReactEcharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    );
}

export default lineChart