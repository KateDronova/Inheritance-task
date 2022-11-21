/////// Common class first
function Builder(x) {
  this.x = x;
}

Builder.prototype.plus = function(){
  let args = [].slice.call(arguments);
  for (let arg of args) {
    this.x += arg;
  }
  return this;
};

Builder.prototype.minus = function(){
  let args = [].slice.call(arguments);
  for (const arg of args) {
    this.x -= arg;
  }
  return this;
};

Builder.prototype.multiply = function(y){
  this.x *= y;
  return this;
};

Builder.prototype.divide = function(y){
  this.x /= y;
  return this;
};

Builder.prototype.get = function(){
  return this;
};

/////// ES6 for numbers
class IntBuilder extends Builder {
  constructor(x = 0) {
    super(x);
  }

  mod(y) {
    this.x = this.x % y;
    return this;
  }

  static random(from, to) {
    return Math.ceil(Math.random() * (to - from) + from);
  }
}

// let intBuilder = new IntBuilder(10); // 10;
// intBuilder
//   .plus(2, 3, 2)                     // 17;
//   .minus(1, 2)                       // 14;
//   .multiply(2)                       // 28;
//   .divide(4)                         // 7;
//   .mod(3)                            // 1;
//   .get();                            // -> 1;
// console.log(intBuilder);
// console.log(IntBuilder.random(10, 100));


/////// ES5 for strings
function StringBuilder(x) {
  Builder.call(this, x);
  this.x = x || '';
}

StringBuilder.prototype = Object.create(Builder.prototype);

StringBuilder.prototype.sub = function(from, n) {
  this.x = this.x.substr(from, n);
  return this;
}

StringBuilder.prototype.remove = function(str) {
  let from = this.x.indexOf(str);
  let to = from + str.length;
  if (from == -1) {
    return;
  } else {
    this.x = this.x.slice(0, from) + this.x.slice(to);
    return this;
  }
}//it is said in the task not to use replace(), is there one more simple solution?

StringBuilder.prototype.minus = function(y) {
  this.x = this.x.replace(this.x.slice(-y),'');
  return this;
}

StringBuilder.prototype.multiply = function(y) {
  this.x = this.x.repeat(y);
  return this;
}

StringBuilder.prototype.divide = function(y) {
  let k = Math.floor(this.x.length / y);
  this.x = this.x.substr(0, k);
  return this;
}

// let strBuilder = new StringBuilder('Hello'); // 'Hello';
// strBuilder
//   .plus(' all', '!')                         // 'Hello all!'
//   .minus(4)                                  // 'Hello '
//   .multiply(3)                               // 'Hello Hello Hello '
//   .divide(4)                                 // 'Hell';
//   .remove('l')                               // 'He';
//   .sub(1,1)                                  // 'e';
//   .get();                                    // -> 'e';
//   console.log(strBuilder);
