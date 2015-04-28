var tape = require("tape")
var babel = require("babel")
var path = require("path")
var fs = require("fs")

tape("propTypes", function(test) {
  var file = fs.readFileSync(path.resolve(__dirname, "./source.fixture.js"))
  var transformed = babel.transform(file, {
    stage: 0,
    plugins: "..",
  }).code
  test.equal(transformed.indexOf("propTypes"), -1)
  test.notEqual(transformed.indexOf("PropTypes"), -1)
  test.notEqual(transformed.indexOf("contextTypes"), -1)
  test.notEqual(transformed.indexOf("handleClick"), -1)
  test.notEqual(transformed.indexOf("render"), -1)
  test.end()
})
