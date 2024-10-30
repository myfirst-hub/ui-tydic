import React, { useState, useEffect } from "react";
import ReactEcharts from 'echarts-for-react';

const style: any = {
    fontSize: 12,
    color: '#1D2129',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'right',
    width: 'calc(100% - 20px)',
    top: '5px',
}

const pieChart: React.FC<{
  list: any[],
  chartHead: string,
  valueUnit: string,
}> = (props) => {
    const { list, chartHead, valueUnit } = props;

    const [option, setOption] = useState({});
    
    useEffect(() => {
        setOption({
            title: {
                text: chartHead,
                left: 'center',
                textStyle: {
                    color: '#1D2129',
                    fontSize: 14,
                    fontWeight: '500',
                },
              },
              tooltip: {
                trigger: 'item'
              },
              legend: {
                // type: 'scroll',
                bottom: 0,
                icon: 'circle',
                itemWidth: 8,
                itemHeight: 14,
                itemGap: 16,
                textStyle: {
                    fontSize: 12,
                    color: '#1D2129',
                    lineHeight: 14,
                },
                left: 'center',
              },
              series: [
                {
                  type: 'pie',
                  radius: '70%',
                  data: list,
                  bottom: 20,
                  label: {
                    show: false,
                  },
                  labelLine: {
                    show: false,
                  },
                }
              ]
        })
    }, [])
    return (
        <div style={{ position: 'relative', width: '396px', height: '100%' }}>
            <div style={style}>{valueUnit}</div>
            <ReactEcharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    );
}

export default pieChart