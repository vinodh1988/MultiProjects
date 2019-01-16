import React from 'react';
import ReactDOM from 'react-dom';
import {Menu} from './Menu.jsx';
import {ArticleArea} from './ArticleArea.jsx'
import './lib/css/bootstrap.min.css';
import './styles/general.css';

class Main extends React.Component{
    render(){
        return(
            <div>
  <Menu></Menu>
  <ArticleArea></ArticleArea>
  </div>
        );
    }
}

ReactDOM.render(<Main/>,document.getElementById('target'));