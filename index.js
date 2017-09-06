const _path = require('path')
const cleanStack = require('clean-stack')

const PATH_RE = /\n.*\n.*\((.+?)(?:\:(\d+))?(?:\:(\d+))\)/
const stack = cleanStack(new Error().stack)
const dirname = _path.dirname(PATH_RE.exec(stack)[1])

module.exports = function pathDirname (path) {
  path = typeof path === 'undefined' ? '' : path

  if (typeof path !== 'string') {
    throw new Error('Expecting path to be string, got "' + typeof path + '".')
  }

  return _path.resolve(dirname, path)
}
