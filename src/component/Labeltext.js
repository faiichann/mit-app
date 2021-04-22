import React ,{ Component }from 'react';
import {TextField} from '@material-ui/core'
import Labelcopy from './LabelCopy'

class Labeltext extends Component {
    constructor(props) {
        super(props);
       this.state = {name: "Michael"}
    }

    changeValue = (e) =>{
        this.setState({name: e.target.value});
      }
      render() {
        return (
          <div className="Labeltext">
            <label value={this.state.name}/>
            <p className="Labeltext-copy">
              Type your Text Here : 
            <input type="text" onChange={this.changeValue}/>
            </p>
                    <h2>This is your Text : {this.props.value}</h2>
          </div>
        );
      }
    }

export default Labeltext
