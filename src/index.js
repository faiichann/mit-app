import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import {Router, Route} from 'react-router'
import history from './history'

import App from './App';
import Design from './component/Design'
import Block from './component/Block'
import reportWebVitals from './reportWebVitals';

class Root extends Component {
  render(){
    return (
      <Router history={history}>
          <Route path={"/"} component={App}>
              <Route path={"design"} component={Design}/>
              <Route path={"block"} component={Block}/>
          </Route>
          <Route path={"design-single"} component={Design}/>
      </Router>
    )
  }
}
ReactDOM.render(<Root/>,window.document.getElementById('root'));
reportWebVitals();