const React = require('react')

const styled = new Proxy({}, {
  get(target, p, receiver) {
    console.log(target, p, receiver)
    return () => React.Fragment
  }
})

module.exports = {
  styled
}
