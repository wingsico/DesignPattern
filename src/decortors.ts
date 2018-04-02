function Monkey() {
  console.log('There is a monkey in a mountain...')
}

Monkey.prototype = {
  sayName: function () {
    console.log("I'm a monkey King")
  },
  attack: function() {
    console.log('monkey attack')
  },
  defend: function () {
    console.log('jump')
  }
}

