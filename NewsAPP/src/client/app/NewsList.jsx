import React from 'react';
import ReactDOM from 'react-dom';
import './styles/news.css';
import {NewsBox} from './NewsBox.jsx';
import Request from 'superagent';
import PubSub from 'pubsub-js';
export class NewsList extends React.Component{
    constructor(){
        super();
        this.state={current:[]};
    }

    componentDidMount(){
        var type=this.props.type;
        Request.get('http://localhost:3000/news/'+type).end(
            function(err,res){
               this.state.current=JSON.parse(res.text);
               if(this.state.current.length>0)
               PubSub.publish('article',this.state.current[0]);
               this.setState(this.state);
            }.bind(this));
    }
    render(){
        var temp=this.state.current.map(function(data){
            return(<NewsBox data={data}/>);
        })
       return(
           <div className="newslist">
             <h1> {this.props.type} News </h1>
            
             {temp}
             
           </div>
       ); 
    }
}