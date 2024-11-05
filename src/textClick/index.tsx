import React from 'react';
// import Text from '../text';
import styles from './index.module.less';
const TextClick: React.FC<{
    // text?: string,
    list: string[],
    handleClick: (item: string) => {},
}> = (props) => {
    const { list, handleClick } = props;
    return (
        <>
            {/* <Text text={text} /> */}
            <div className={styles.mt10}>您还可以继续提问：</div>
            <ul>
                {
                    list.map(item => (
                        <li className={styles.rowText} onClick={() => handleClick(item)}>{item}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default TextClick;