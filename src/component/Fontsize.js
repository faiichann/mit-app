import React, { Component } from 'react';
import Select from 'react-select';
// import { Platform, StyleSheet, View, Text } from 'react-native';

// const options = StyleSheet.create({
//     setFontSizeOne: {
//       fontSize: 15 // Define font size here in Pixels
//     },
//     setFontSizeTwo: {
//       fontSize: 20 // Define font size here in Pixels
//     },
//     setFontSizeThree: {
//       fontSize: 25 // Define font size here in Pixels
//     },
//     setFontSizeFour: {
//       fontSize: 30 // Define font size here in Pixels
//     },
  
//   });

const options = [
    { label: "12", fontSize: "12px"},
    { label: "14", fontSize: "14px"},
    { label: "16", fontSize: "16px"},
    { label: "18", fontSize: "18px"},
    { label: "20", fontSize: "14px"}
];

class Fontsize extends Component {
    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState(
          { selectedOption }
        );
      };

      render() {
        const { selectedOption } = this.state;
    
        return (
            <form>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <input type="text" style={ options.fontSize } 
          onChange = {this.handleChange.bind(this)}/>
        </form>
        );
      }
}

export default Fontsize