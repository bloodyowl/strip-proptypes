import React, {Component, PropTypes} from "react"

export class First extends React.Component {

  static propTypes = {
    text: React.PropTypes.string,
  }

  static contextTypes = {
    foo: React.PropTypes.string,
  }

  handleClick() {}

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export class Second extends Component {

  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

