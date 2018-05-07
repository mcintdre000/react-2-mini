import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      fontColor: 'green',
      fontSize: 14,
      fontFamily: 'arial',
      allowEdit: true,
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateSize = this.updateSize.bind(this)
  }

  updateColor(val) {
    this.setState({ fontColor: val })
  }

  updateSize(val) {
    this.setState({ fontSize: val })
  }

  // updateFamily

  // updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          <ColorChanger update={this.updateColor} fontColor={this.state.fontColor} />
          <SizeChanger update={this.updateSize} fontSize={this.state.fontSize} />
          <FamilyChanger fontFamily={this.state.fontFamily} />
        </div>
        <div className="textArea">
          <TextContainer
            fontColor={this.state.fontColor}
            fontSize={this.state.fontSize}
            fontFamily={this.state.fontFamily}
          />
        </div>
        <div className="debug">
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    )
  }
}

export default App;
