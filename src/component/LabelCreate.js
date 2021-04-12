import React, { Component } from 'react';

class LabelCreate extends Component {
    constructor(props) {
      super(props);
      this.state = {
        numberOfGuests: 2  //Value input text (หาวิธีเรียกจากjson)
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="text"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }

  export default LabelCreate