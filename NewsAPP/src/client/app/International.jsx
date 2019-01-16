import React from 'react';
import ReactDOM from 'react-dom';
import {NewsList} from './NewsList.jsx';

export class International extends React.Component{
    render(){
        return(
            <NewsList type="International"/>
        );
    }
}