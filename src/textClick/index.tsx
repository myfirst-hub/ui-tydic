import React from 'react';
// import Text from '../text';
import './index.css';
const TextClick: React.FC<{
    // text?: string,
    list: string[],
    handleClick: (item: string) => {},
}> = (props) => {
    const { list, handleClick } = props;
    return (
        <>
            {/* <Text text={text} /> */}
            <div className="mt10">您还可以继续提问：</div>
            <ul>
                {
                    list.map(item => (
                        <li className="rowText" onClick={() => handleClick(item)}>{item}</li>
                    ))
                }
            </ul>
        </>
    );
}

export default TextClick;