# DEPRECATED: strip-proptypes

[![Build Status](https://travis-ci.org/bloodyowl/strip-proptypes.svg?branch=master)](https://travis-ci.org/bloodyowl/strip-proptypes)

Use [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types), which is both compatible with Babel 6 and removes `propType` declarations from stateless functional components.

## install

```console
$ npm install bloody-strip-proptypes
```

## what it does

in production, react doesn't check `propTypes`. this plugin removes the
`static propTypes` declarations in ES6 classes.

```javascript
class extends Component {

  static contextTypes = {
    router: PropTypes.func,
  }

  static propTypes = {
    content: PropTypes.string,
  }

  render() {
    return (
      <div />
    )
  }
}
```

will be transformed into

```javascript
class extends Component {

  static contextTypes = {
    router: PropTypes.func,
  }

  render() {
    return (
      <div />
    )
  }
}
```

## usage

```console
$ babel --plugins bloody-strip-proptypes source.js
```

## [license](LICENSE)
