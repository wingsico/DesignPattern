/**
 * 面向对象编程
 * 
 */

var Book = function (id, bookName, price) {
  this.id = id
  this.bookName = bookName
  this.price = price
}

Book.prototype.display = function () {
  console.log(`| ${this.id} |${this.bookName} | ${this.price} | `)
}

var designPatternOfJS = new Book('203', 'Javascript 设计模式', 76)

designPatternOfJS.display()
console.log(designPatternOfJS.__proto__.__proto__)