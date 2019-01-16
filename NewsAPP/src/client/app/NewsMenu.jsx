import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

export class NewsMenu extends React.Component{
    render(){
        return(
            <div>
        <nav className="navbar navbar-inverse" style={{backgroundColor:"darkblue"}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">News 123X</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/politics">Politics</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/international">International</Link></li>
          </ul>
        </div>
      </nav>
      <div className="listall">
            {this.props.children}
      </div>
      </div>
        );
    }
}