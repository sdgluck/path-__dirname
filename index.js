var _path = require('path')
var cleanStack = require('clean-stack')

var PATH_RE = /\n.*\n.*\((.+?)(?:\:(\d+))(?:\:(\d+))\)/

module.exports = function pathDirname (path) {
  path = typeof path === 'undefined' ? '' : path

  if (typeof path !== 'string') {
    throw new Error('Expecting path to be string, got "' + typeof path + '".')
  }

  var stack = cleanStack(new Error().stack)
  var dirname = _path.dirname(PATH_RE.exec(stack)[1])

  return _path.resolve(dirname, path)
}
