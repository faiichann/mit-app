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
      // const big = { padding: "10px", margin: "2px" };
      return (
        <div className="Labelcopy">
        <div>
                  <div className="Copy"  >
                      <h2 style={{color:this.state.colorPreview ,fontSize: this.state.size}} >This is your Text :  {this.state.name}</h2>
                  </div>
              </div>
          <p className="Label">
            Type your text Here :
          <input type="text" onChange={this.handleChange.bind(this)}/>
          </p>

          <ChromePicker color={this.state.background} onChange={handleChangeComplete} /> 
          <div style={{ fontSize: this.state.size }}>

      {/* <button style={big} onClick={() => this.setState(size + 2)}>
        A+ Font Size: {this.state.size + 2}
      </button>
      <button style={big} onClick={() => this.setState(size - 2)}>
        A- Font Size: {this.state.size - 2}
      </button> */}
    </div>

        </div>
      );
    }
  }
  export default Labelcopy

  // class Header extends React.Component {
  //     render() {
  //         return (
  //             <div>
  //                 <div className="Copy" style={previewStyle} >
  //                     <h2 style={previewfont} >This is your Text :  {this.props.value}</h2>
  //                 </div>
  //             </div>
  //         );
  //     }
  // }

