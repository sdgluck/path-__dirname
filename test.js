const path = require('path')
const dirname = require('./')

{
  console.log('dirname is equal?')

  const actual = dirname()
  const expected = __dirname

  if (actual === expected) {
    console.log('yes')
  } else {
    console.log('no')
    console.log(`expected ${actual} to be ${expected}`)
    process.exit(1)
  }
}

console.log('')

{
  console.log('find path in dirname?')

  const actual = dirname('spongebob')
  const expected = path.resolve(__dirname, 'spongebob')

  if (actual === expected) {
    console.log('yes')
  } else {
    console.log('no')
    console.log(`expected ${actual} to be ${expected}`)
    console.log()
    process.exit(1)
  }
}
