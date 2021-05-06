import React from 'react';
import { ChromePicker } from "react-color";

class Labelcopy extends React.Component {

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
      const previewStyle = {
        background: this.state.colorPreview,
        opacity: this.state.opacityBg,
        width: "50px",
        height: "50px"
      };
      const previewfont = {
        color: this.state.colorPreview,
      };
      const big = { padding: "10px", margin: "2px" };

      return (
        <div className="Labelcopy">
        <div>
          <Text value={this.state.name} color={this.state.colorPreview} fontSize={this.state.size} />
        {/* <div className="Copy"  >
                      <h2 style={{color:this.state.colorPreview ,fontSize: this.state.size}} >[{this.state.name}] </h2>
                  </div> */}
              </div>
          <p className="Label">
            Type your text Here :
          <input type="text" onChange={this.handleChange.bind(this)}/>
          </p>

          <ChromePicker color={this.state.background} onChange={handleChangeComplete} /> 
          <div style={{ fontSize: this.state.size }}>

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

  export default Labelcopy

  class Text extends React.Component {
    render() {
        return (
            <div>
                <div className="Copy">
                    <h2 style={{color: this.props.color ,fontSize: this.props.fontSize}}>{this.props.value}</h2>
                </div>
            </div>
        );
    }
}