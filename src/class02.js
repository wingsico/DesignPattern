/**
 * 面向对象编程
 *
 */

var Book = function(id, bookName, price) {
  this.id = id
  this.bookName = bookName
  this.price = price
}

Book.prototype.display = function() {
  console.log(`| ${this.id} |${this.bookName} | ${this.price} | `)
}

var designPatternOfJS = new Book('203', 'Javascript 设计模式', 76)

designPatternOfJS.display()
console.log(designPatternOfJS) // 类的实例
console.log(designPatternOfJS.__proto__) // 类的实例的原型，指向的就是类的原型，通过原型链的传递
console.log(designPatternOfJS.__proto__ === Book.prototype) // true 实例的原型与类的原型是同样的指向
console.log(designPatternOfJS.__proto__.constructor) // 类的实例的原型的构造器
console.log(designPatternOfJS.__proto__.constructor === Book) // true 构造器属性指向的是拥有整个原型对象的函数或对象，在这里就指向Book

/**
 * 属性和方法的封装
 */
var Book = function(id, name, price) {
  var num = 1 // 私有属性
  var name, price
  function checkId() {
    // 私有方法
  }
  // 特权方法
  this.getName = function() {
    return name
  }
  this.getPrice = function() {
    return price
  }
  this.setName = function(newName) {
    name = newName
  }
  this.setPrice = function(newPrice) {
    price = newPrice
  }

  // 对象公有属性
  this.id = id
  // 对象方法
  this.copy = function() {}

  // 构造器 ，创建实例时自动调用
  this.setName(name)
  this.setPrice(price)
}

var testBook = new Book(123, 'test', 100)
testBook.setName('123123')
console.log(testBook.getName())

/**
 * 类的静态公有属性 以及类的原型
 */
// 静态公有属性
Book.isChinese = true // 实例无法访问
// 静态公有方法
Book.restTime = function() {
  console.log('new Time')
}

// 由于类的实例的__proto__指向Book.prototype，因此实例可以通过this访问到类的原型
Book.prototype = {
  // 公有属性
  isJSBook: false,
  // 公有方法
  display: function() {}
}

/**
 * 通过闭包实现一个完整的类
 * 包括静态私有变量、静态私有方法、静态公有属性，静态公有方法
 * 以及类的私有变量，私有方法，特权方法，公有属性，公有方法，构造器
 */

var Book = (function() {
  var bookNum = 0 // 静态私有变量
  function checkBook() {} // 静态私有方法

  function _book(newId, newName, newPrice) {
    // 私有变量
    var name, price
    // 私有方法
    function checkId(id) {}

    // 特权方法
    this.getName = function() {
      return name
    }
    this.getPrice = function() {
      return price
    }
    this.setName = function(newName) {
      name = newName
    }
    this.setPrice = function(newPrice) {
      price = newPrice
    }

    // 对象公有属性
    this.id = newId
    // 对象方法
    this.copy = function() {}
    bookNum++
    if (bookNum > 100) {
      throw new Error('我们只出版一百本书')
    }
    // 构造器
    this.setName(newName)
    this.setPrice(newPrice)
  }
  // 构造类的原型
  _book.prototype = {
    // 静态公有属性
    isJSBook: false,
    display() {}
  }

  return _book // 返回类
})()

var test = new Book(123, 'hahah', 222)
console.log(test.getName())

/**
 * 安全模式，防止创建实例时漏掉new操作符
 */

// 原理，检测this指向是否为类
var Book = function(id, name, price) {
  if (this instanceof Book) {
    this.id = id
    this.name = name
    this.price = price
  } else {
    return new Book(id, name, price)
  }
}

var test = Book(123, 'te', 1211) // 忘记使用new 也可以正常使用
console.log(test, test.name, global.name)
