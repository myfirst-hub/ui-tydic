import React from 'react';
import './index.css';

const MultipleValueForm: React.FC<{
    headerList: string[],
    bodyList: string[][],
}> = (props) => {
    const { headerList, bodyList } = props;
    return (
        <div className="multipleValueTable">
            <div className="labelRow">
                {
                    headerList.map(item => (<div className="labelCol">{item}</div>)) 
                }
            </div>
            {bodyList.map(arr => <div className="valueRow">{arr.map(item => (<div className="valueCol">{item}</div>))}</div>)}
        </div>
    );
}

export default MultipleValueForm