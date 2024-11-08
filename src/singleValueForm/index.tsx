import React from 'react';
import _ from 'lodash';
import './index.css';

const SingleValueForm: React.FC<any> = (props) => {
    const { list } = props;
    const nestedArray = _.chunk(list, 3)
    console.log('nestedArray...............', nestedArray)
    return (
        <div className="singleValueTable">
            {
                nestedArray.map((arr: any) => (
                    <>
                        <div className="labelRow">
                            <div className="labelCol">{arr[0]?.label}</div>
                            <div className="labelCol">{arr[1]?.label}</div>
                            <div className="labelCol">{arr[2]?.label}</div>
                        </div>
                        <div className="valueRow">
                            <div className="valueCol">{arr[0]?.value}</div>
                            <div className="valueCol">{arr[1]?.value}</div>
                            <div className="valueCol">{arr[2]?.value}</div>
                        </div>
                    </>
                ))
            }
        </div>
    );
}

export default SingleValueForm