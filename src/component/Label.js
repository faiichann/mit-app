import React from 'react';
import { ChromePicker } from "react-color";

class Label extends React.Component {

    constructor(props) {
       super(props);
       this.state = {
         name: "",
         background:[ {h: 250,
          s: 0,
          l: 0.2,
          a: 1}],
          opacityBg : "1",
          colorPreview : "#333333",
          size: 12,

      }
    }

     handleChange(e) {
        const name = e.target.value;
        this.setState({name});
     }
     add =()=>{
      this.setState(add=>({
        size :add.size + 2
      }))
     } 
     reduce =()=>{
      this.setState(re=>({
        size :re.size - 2
      }))
     } 

    render() {
  
    const handleChangeComplete = data => {
      if (data.hsl !== this.state.background) {
        this.setState({ colorPreview :data.hex});
        this.setState({background:data.hsl});
        this.setState({opacityBg :data.hsl.a});
      }
    };
      const styles = {
        color: this.props.colorPreview,
        fontSize: this.props.size,
      };
      const value = this.props.name

      // const big = { padding: "10px", margin: "2px" };

      return (
        <div className="Labelcopy">
          <Text value={this.state.name} color={this.state.colorPreview} fontSize={this.state.size} />

          <p className="Label">
            Type your text Here :
          <input type="text" onChange={this.handleChange.bind(this)}/>
          </p>

          <ChromePicker color={this.state.background} onChange={handleChangeComplete} /> 
          <div>

      <button onClick={this.add}>
       A+
      </button>
      <button onClick={this.reduce}>
        A-
      </button>
    </div>

        </div>
      );
    }
  }

  class Text extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
        return (
            <div>
                <div className="Copy">
                    <h2 style={{color: this.props.color ,fontSize: this.props.fontSize}}>Text :{this.props.value}</h2>
                </div>
            </div>
        );
    }
}

Label.Text = Text;
export default Label