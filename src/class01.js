// /**
//  * 命名空间
//  * 将函数包装在对象集合中
//  * 但无法复用
//  */

// var checkGroup = {
//   checkName: function() {
//     // 验证姓名
//   },
//   checkEmail: function() {
//     // 验证邮箱
//   },
//   checkPassword: function() {
//     // 验证密码
//   }
// }

// /**
//  * 复用，设计一个函数，将对象返回
//  *  但与 CheckGroup 函数本身无关
//  */

// var CheckGroup = function() {
//   return {
//     checkName: function() {
//       // 验证姓名
//     },
//     checkEmail: function() {
//       // 验证邮箱
//     },
//     checkPassword: function() {
//       // 验证密码
//     }
//   }
// }

// // 使用
// // var checks = CheckGroup()
// // checks.checkEmail()
// // checks.checkName()

// /**
//  * 创建一个类
//  *
//  */

// var CheckObject = function() {
//   this.checkName = function() {}
//   this.checkEmail = function() {}
//   this.checkPassword = function() {}
// }

// var a = new CheckObject()
// a.checkEmail()

// /**
//  * 新创建的实例都有一套自己的方法，造成奢侈的消耗
//  */

// var CheckObject = function() {}
// CheckObject.prototype = {
//   checkName: function() {},
//   checkEmail: function() {},
//   checkPassword: function() {}
// }

// var a = new CheckObject()
// a.checkEmail()

// /**
//  * 链式调用
//  */
// var CheckObject = function() {}
// CheckObject.prototype = {
//   checkName: function() {
//     console.log('check name')
//     return this
//   },
//   checkEmail: function() {
//     console.log('check email')
//     return this
//   },
//   checkPassword: function() {
//     console.log('check Password')
//     return this
//   }
// }

// var a = new CheckObject()
// a
//   .checkEmail()
//   .checkName()
//   .checkPassword()

/**
 * 函数的祖先
 * 修改原生类的原型
 * 污染原生对象
 */

// Function.prototype.checkEmail = function() {
//   console.log(this, 'checkEmail')
// }
// var f = function() {}
// f.checkEmail()

/**
 * 抽象统一添加方法
 * addMethod
 * 链式添加方法
 * 链式使用方法
 */

Function.prototype.addMethod = function(name, fn) {
  // this[name] = fn // 添加静态方法，只能作用于类本身而不能作用于类的实例
  this.prototype[name] = fn
  return this
}

var Methods = function() {}
Methods.addMethod('checkEmail', function() {
  console.log('check email')
  return this
}).addMethod('checkName', function() {
  console.log('check name')
  return this
})

var a = new Methods()
a.checkEmail().checkName()

/**
 * 练习：
 * 1. 真假对象一节中如何实现链式调用
 */
var CheckObject = function() {
  return {
    checkName: function() {
      console.log('checkName')
      return this
    },
    checkEmail: function() {
      console.log('checkEmail')
      return this
    }
  }
}

CheckObject()
  .checkName()
  .checkEmail() // 通过

/**
 * 练习
 * 2. 为函数添加多个方法的addMethods
 */
var example = [
  {
    name: 'eat',
    fn: function() {
      console.log('eat')
      return this
    }
  },
  {
    name: 'run',
    fn: function() {
      console.log('run')
      return this
    }
  }
]
Function.prototype.addMethods = function (includingFnsObjectArr = []) {
  includingFnsObjectArr.forEach(function(fnsObject) {
    this[fnsObject.name] = fnsObject.fn
  }.bind(this))
}
var fn = function() {}
fn.addMethods(example)
fn.eat().run()

/**
 * 练习
 * 3. 既可以对函数原型添加方法，又可以对自身添加方法的addMethod方法
 */
Function.prototype.addMethod = function(name, fn) {
  // this[name] = fn // 添加静态方法，只能作用于类本身而不能作用于类的实例
  this.prototype[name] = fn
  this.constructor.prototype[name] = fn // 
  return this
}

var Methods = function() {}
Methods.addMethod('checkEmail', function() {
  console.log('check email')
  return this
}).addMethod('checkName', function() {
  console.log('check name')
  return this
  })
var b = new Methods()
b.checkEmail().checkName()
  
var a = function () { }

a.checkEmail()