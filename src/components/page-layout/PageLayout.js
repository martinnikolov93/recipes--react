import React from 'react';
import Header from '../header/Header';

const PageLayout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}
        </div>
    )
}

export default PageLayout