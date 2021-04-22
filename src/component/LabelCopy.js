import React from 'react';

class Labelcopy extends React.Component {

    constructor(props) {
       super(props);
       this.state = {name: ""}
    }

     handleChange(e) {
        const name = e.target.value;
        this.setState({name});
     }

    render() {
      return (
        <div className="Labelcopy">
          <Header value={this.state.name}/>
          <p className="Label">
            Type your text Here :
          <input type="text" onChange={this.handleChange.bind(this)}/>
          </p>
        </div>
      );
    }
  }
  export default Labelcopy
  class Header extends React.Component {
      render() {
          return (
              <div>
                  <div className="Copy">
                      <h2>This is your Text :  {this.props.value}</h2>
                  </div>
              </div>
          );
      }
  }

