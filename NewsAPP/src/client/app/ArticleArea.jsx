import React from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
export class ArticleArea extends React.Component
{
    constructor(){
        super();
        this.state={now:{}};
    }
    componentWillMount(){
        PubSub.subscribe('article',function(e,data){
            this.state.now=data;
            this.setState(this.state);
        }.bind(this));
    }
    render(){
        return(
            <div>
             <div className="article">
              <h1>{this.state.now.title}</h1>
<h5 style={{color:'darkred',textAlign:'right'}}>
               {this.state.now.date}
               </h5>
  <div dangerouslySetInnerHTML={{__html:this.state.now.article}}></div>
            </div>
             </div>
        )
    }
}