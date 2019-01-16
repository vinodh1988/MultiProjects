import React from 'react';
import ReactDOM from 'react-dom';
import {NewsList} from './NewsList.jsx';
export class Business extends React.Component{
    render(){
        return(
          <NewsList type="Business"/>
        );
    }
}