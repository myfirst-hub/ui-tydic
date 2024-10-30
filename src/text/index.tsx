import React from 'react';

const Text: React.FC<any> = (props) => {
    const { text } = props;
    return (
        <div>{ text }</div>
    );
}

export default Text;