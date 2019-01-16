import React from 'react';
import ReactDOM from 'react-dom';
import {Box} from './box.jsx';
import {Form} from './form.jsx';
import './styles/general.css';
class Main extends React.Component{
    constructor(){
        super();
        console.log('instatiated');
        this.state={fruits:['Apple','Orange','Banana'],
                    vegies:['Carrot','Onion','Beans'],
                    pulses:['Black gram','Bengal gram','Thoor dhaal'],
                    spices:['Pepper','Turmeric','Cinnamon'],
                    code:''};
        this.addProduct=this.addProduct.bind(this);
        this.updateCode=this.updateCode.bind(this);
    }
    componentWillMount(){
        console.log("Premounting state");
    }
    updateCode(){
        this.state.code=ReactDOM.findDOMNode(this.refs.code).value;
        this.setState(this.state);
    }
    addProduct(){
      var temp=ReactDOM.findDOMNode(this.refs.data).value;
      var type=ReactDOM.findDOMNode(this.refs.type).value;
      if(temp!=undefined&&temp.length!=0){
      switch(type){
          case 'vegies':
             this.state.vegies.push(temp);
             break;
          case 'fruits':
             this.state.fruits.push(temp);
             break;
          case 'spices':
             this.state.spices.push(temp);
             break;
          case 'pulses':
             this.state.pulses.push(temp);
             break;
      }
        console.log(this.state);
        this.setState(this.state);
    }
      
    }
    render(){
        console.log("rendering");
        return(
            <div>
            <div className="wrapbox">
            <h1>React JS is working</h1>
            <hr/>
            <h3>This component is built as part of trainig</h3>
            <div>
        <input type="text" ref="data"/>
        <select ref="type">
            <option>fruits</option>
            <option>vegies</option>
            <option>pulses</option>
            <option>spices</option>
        </select>
        <input type="button" value="Store data" onClick={this.addProduct}/>
        add Code <input type="text" ref="code" onKeyUp={this.updateCode}/>  
           <div dangerouslySetInnerHTML={{__html:this.state.code}}></div>
            </div><br/><br/>
            <Form/>
            </div>
              <Box title="Fruits" list={this.state.fruits}/>
              <Box title="Vegetables" list={this.state.vegies}/>
              <Box title="Spices" list={this.state.spices}/>
              <Box title="Pulses" list={this.state.pulses}/>
           
            </div>
        );
    }
    componentDidMount(){
        console.log("component has mounted");
    }
    shouldComponentUpdate(){
        console.log('deciding.....');
        return true;
    }
    componentWillUpdate()
    {
        console.log("Component about to update");
    }

    componentDidUpdate(){
        console.log("Component has updated");
    }
}

ReactDOM.render(<Main/>,document.getElementById('target'));