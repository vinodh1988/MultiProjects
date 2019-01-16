import React from 'react';
import ReactDOM from 'react-dom';

export class Box extends React.Component{
   render(){
       var temp=this.props.list;
      temp= temp.map(function(data){
           return (<li key={data}>{data}</li>);
       });
       return(
           <div className="box">
               <h3>
                  {this.props.title}  
               </h3>
               <hr/>
               <ul>
                   {temp}
               </ul>
           </div>
           
       );
   }
}