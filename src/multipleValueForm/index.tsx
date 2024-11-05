import React from 'react';
import styles from './index.module.less';

const MultipleValueForm: React.FC<{
    headerList: string[],
    bodyList: string[][],
}> = (props) => {
    const { headerList, bodyList } = props;
    return (
        <div className={styles.multipleValueTable}>
            <div className={styles.labelRow}>
                {
                    headerList.map(item => (<div className={styles.labelCol}>{item}</div>)) 
                }
            </div>
            {bodyList.map(arr => <div className={styles.valueRow}>{arr.map(item => (<div className={styles.valueCol}>{item}</div>))}</div>)}
        </div>
    );
}

export default MultipleValueForm