var babel = require("babel-core")

var Transformer = babel.Transformer
var types = babel.types

module.exports = new Transformer("strip-proptypes", {
  ClassProperty: function(node, parent) {
    if(!node.static) {
      return
    }
    if(node.key.name !== "propTypes") {
      return
    }
    return types.emptyStatement()
  },
})
