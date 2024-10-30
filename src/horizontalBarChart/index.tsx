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

const HorizontalBarChart: React.FC<{
    legendValues: string[],
    dataValues: Array<string[]>,
    chartHead: string,
    labelUnit: string,
    xValues: string,
}> = (props) => {

    const { legendValues, dataValues, chartHead, labelUnit, xValues } = props;

    const [option, setOption] = useState({});
    
    useEffect(() => {
        setOption({
            title: {
                text: labelUnit,
                textStyle: {
                    color: '#1D2129',
                    fontSize: 12,
                    fontWeight: '400',
                },
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
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 8,
            },
            grid: {
                top: '10%',
                left: '0%',
                right: '4%',
                bottom: '8%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisLabel: {
                    color: '#999999',
                    fontSize: 10,
                },
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                },
            },
            yAxis: {
                type: 'category',
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
            // color: ['#405DF9', '#ED589D'],
            series: dataValues.map((d, index) => ({
                name: legendValues.length > 0 ? legendValues[index] : '',
                type: 'bar',
                barWidth: 8,
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

export default HorizontalBarChart