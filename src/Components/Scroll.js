import React from 'react';
const Scroll = (props) => {
    return(
        <div style= {{ overflowY: 'scroll', border: '3px solid black', height: '37.8rem' }} >
            {props.children}
        </div>
    );
};
export default Scroll;