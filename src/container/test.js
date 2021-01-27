import React, { Component } from 'react'
class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      str: "asssssd"
    }
  }
  handleChange () {
    this.setState({
      str: this.state.str.split('').reverse().join('')
    })
  }
  componentDidMount () {
    // this.handleChange()
  }
  render () {
    const { str } = this.state
    return (
      <div onClick={() => { this.handleChange() }}>
        {str}
      </div>
    );
  }
}
export default test;