import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './App';
import reportWebVitals from './reportWebVitals';

class Root extends Component {
  render(){
    return (
      <BrowserRouter>
        <Route path="/" component={App}/>
         
      </BrowserRouter>
    )
  }
}
ReactDOM.render(<Root/>,window.document.getElementById('root'));
reportWebVitals();
