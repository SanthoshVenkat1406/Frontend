import React, { Component } from 'react';
class PageColor extends Component {
  constructor(props) {
    super(props);
    this.state = { color:'blue'};
  }
  changeColor = (color) => {this.setState({color});
  };
  componentDidMount() {
    const dv = document.getElementById('mnt');
    dv.innerHTML += "<br><b><u>Component mounted</u></b>";
    dv.style.color = this.state.color;
  }
  componentDidUpdate() {
    const dv = document.getElementById('mnt');
    dv.innerHTML += "<br><b><i>Component updated</b></i>";
    dv.style.color = this.state.color;
  }
  componentWillUnmount()
  {
    // write the code to save the state of the component into a database or a file.
    const dv=document.getElementById('mnt');
    dv.innerHTML += "<br><b><i> Component unmounted </b></i>";
  }
  render() {
    return (
      <div>
        <select value={this.state.color}
        onChange={(e) => {this.changeColor(e.target.value);
          }}>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="brown">Brown</option>
          <option value="pink">Pink</option>
          <option value="teal">Teal</option>
        </select>
        <div id="mnt"></div>
      </div>
    );
  }
}
export default PageColor;