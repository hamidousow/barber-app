import React from 'react';

const LeftContent = (props) => {

    const children = props.children
    
    return (
        <div>
            {children}
        </div>
    );
};

export default LeftContent;