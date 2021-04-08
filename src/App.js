import logo from './logo.svg';
import './App.css';
import Head from './component/Head'

function App() {
  return (
        <div className="container">
          <div className="row">
            <div className="col-xs-10 col-xs-offset-1">
              <Head/>
            </div>
          </div>
          <hr/>
          <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
              {this.props.children}
              <p>Hello</p>
            </div>
          </div>
        </div>
  )
}

export default App;
