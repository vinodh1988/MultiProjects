import React from 'react';
import ReactDOM from 'react-dom';
import {NewsMenu} from './NewsMenu.jsx';
import {Business} from './Business.jsx';
import {Politics} from './Politics.jsx';
import {Home} from './Home.jsx';
import {Entertainment} from './Entertainment.jsx';
import {Sports} from './Sports.jsx';
import {International} from './International.jsx';
import {Route,Router,Link,browserHistory,hashHistory,IndexRoute} 
from 'react-router';


var routes=(<Route path="/" component={NewsMenu}>
<IndexRoute component={Home}></IndexRoute>
<Route path="politics" component={Politics}></Route>
<Route path="sports" component={Sports}></Route>
<Route path="business" component={Business}></Route>
<Route path="international" component={International}></Route>
<Route path="entertainment" component={Entertainment}></Route>
</Route>);

export class Menu extends React.Component{
    render(){
        return(
            <Router history={browserHistory} routes={routes}/>
        );
    }
}