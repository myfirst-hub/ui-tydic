import React from 'react';
import _ from 'lodash';
import styles from './index.module.less';

const SingleValueForm: React.FC<any> = (props) => {
    const { list } = props;
    const nestedArray = _.chunk(list, 3)
    console.log('nestedArray...............', nestedArray)
    return (
        <div className={styles.singleValueTable}>
            {
                nestedArray.map((arr: any) => (
                    <>
                        <div className={styles.labelRow}>
                            <div className={styles.labelCol}>{arr[0]?.label}</div>
                            <div className={styles.labelCol}>{arr[1]?.label}</div>
                            <div className={styles.labelCol}>{arr[2]?.label}</div>
                        </div>
                        <div className={styles.valueRow}>
                            <div className={styles.valueCol}>{arr[0]?.value}</div>
                            <div className={styles.valueCol}>{arr[1]?.value}</div>
                            <div className={styles.valueCol}>{arr[2]?.value}</div>
                        </div>
                    </>
                ))
            }
        </div>
    );
}

export default SingleValueForm