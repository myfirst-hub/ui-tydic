import React from 'react';
import styles from './index.module.less';

const MultipleValueForm: React.FC<{
    headerList: string[],
    bodyList: string[],
}> = (props) => {
    const { headerList, bodyList } = props;
    return (
        <div className={styles.multipleValueTable}>
            <div className={styles.labelRow}>
                {
                    headerList.map(item => (<div className={styles.labelCol}>{item}</div>)) 
                }
            </div>
            <div className={styles.valueRow}>
                {bodyList.map(item => (<div className={styles.valueCol}>{item}</div>))}
            </div>
        </div>
    );
}

export default MultipleValueForm