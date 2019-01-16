import React from 'react';
import ReactDOM from 'react-dom';
import './styles/form.css';
import Request from 'superagent';
export class Form extends React.Component{
    constructor(){
     super();
     this.state={validation:''};
     this.saveNews=this.saveNews.bind(this);
    }
    
    render(){
        return(
        <div class="formbox">
        <table>
          <tr>
          <th>News ID</th>
          <td><input type="text" ref="newsid"/></td>
            </tr>
            <tr>
          <th>Title</th>
          <td><input type="text" ref="title"/></td>
            </tr>
            <tr>
            <th>Article</th>
           <td> <textarea ref="article"></textarea> </td>
          </tr>
          <tr>
          <th> Type </th>
           <td> <select ref="type">
              <option>Politics</option>
              <option>Sports</option>
              <option>International</option>
              <option>Business</option>
              <option>Entertainment</option>
          </select>
          </td>  
          </tr>
          <tr>
              <th>Image file name</th>
              <td><input type="text" ref="image"/></td>
          </tr>
          <tr>
              <td colspan="2"><input type="button" value
              ="upload article" onClick={this.saveNews}/></td>
          </tr>
       </table>
       <div> 
         ******  {this.state.validation}*****
        </div>
       </div>
       );
    }

    saveNews(){
       var newsid= ReactDOM.findDOMNode(this.refs.newsid).value;
       var title= ReactDOM.findDOMNode(this.refs.title).value;
       var article= ReactDOM.findDOMNode(this.refs.article).value;
       var image= ReactDOM.findDOMNode(this.refs.image).value;
       var type= ReactDOM.findDOMNode(this.refs.type).value;
       var date=new Date();
       if(newsid==undefined|| newsid.length===0 || title==undefined
      || title.length===0 ||article==undefined|| article.length<30||
      image==undefined||image.length===0)
        this.state.validation="Please properly enter all the fields";
       else{
           this.state.validation="All fields enterered";
           var object={newsid:newsid,title:title,article:article,image:image,
        type:type,date:date};
           Request
           .post('http://localhost:3000/news')
           .send(object)
           .set('Accept', 'application/json')
           .end(function(err, res){
             if (err || !res.ok) {
               alert('Oh no! error');
             } else {
               alert('Comment saved successfully');
             }
           });
                this.setState(this.state);
       }
       this.setState(this.state);
    }
}