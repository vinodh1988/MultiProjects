import React from 'react';
import ReactDOM from 'react-dom';
import PubSub from 'pubsub-js';
export class NewsBox extends React.Component
{
    constructor(){
        super();
        this.publishnews=this.publishnews.bind(this);
    }
    publishnews(){
        PubSub.publish('article',this.props.data);
    }
    render(){
        var image="images/"+this.props.data.image;
        var exp=/<[a-zA-Z0-9/-]+>/;
        var temparticle=this.props.data.article;
        while(exp.test(temparticle))
        {
            temparticle=temparticle.replace(exp,'');
        }
    return(
       <div className="newsbox">
           <div className="leftimg">
             <img src={image} alt="news image"/>
           </div>
           <div className="rightnews">
               <h4>{this.props.data.title}</h4>
               <h6>{temparticle.substring(0,50)}...........
<span className="label label-primary" style={{cursor:'pointer'}}
 onClick={this.publishnews}>read More</span>
               </h6>
           </div>
       </div>
    );
   }
}