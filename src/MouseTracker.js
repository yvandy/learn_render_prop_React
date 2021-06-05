import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img
        src='./img/cat.png'
        style={{ position: 'absolute', left: mouse.x, top: mouse.y }}
      />
    )
  }
}

class MouseWithCat extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = { x: 0, y: 0 }
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        <Cat mouse={this.state} />
      </div>
    )
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <MouseWithCat />
      </div>
    )
  }
}

export default MouseTracker
