# strip-proptypes

[![Build Status](https://travis-ci.org/bloodyowl/strip-proptypes.svg?branch=master)](https://travis-ci.org/bloodyowl/strip-proptypes)

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
