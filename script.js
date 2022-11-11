
///// Common class first
function Builder(x) {
  this.x = x;
}

Builder.prototype.plus = function(...n){
  this.n = [...n];
  for (const nSingle of this.n) {
    this.x += nSingle;
  }
  return this.x;
};

Builder.prototype.minus = function(...n){
  this.n = [...n];
  for (const nSingle of this.n) {
    this.x -= nSingle;
  }
  return this.x;
};

Builder.prototype.multiply = function(y){
  this.y = y;
  return this.x * this.y;
};

Builder.prototype.divide = function(y){
  this.y = y;
  return this.x / this.y;
};

Builder.prototype.get = function(){
  return this.x;
};

////// ES6 for numbers
class IntBuilder extends Builder {
  constructor(x) {
    super(x);
  }

  mod(y) {
    this.y = y;
    return this.x % this.y;
  }

  static random(from, to) {
    this.min = from;
    this.max = to;
    return Math.ceil(Math.random() * (this.max - this.min) + this.min);
  }
}

////// ES5 for strings
function StringBuilder(x) {
  Builder.call(x);
}

StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.sub = function(from, n) {
  this.from = from;
  this.n = n;
  return x.substr(this.from, this.n);
}


new StringBuilder(str)   // constructor takes starting string, if not passed starts with '';
plus(...str)// takes infinite number of strings and concat with stored string;
minus(n)    // cut last n chars from stored string;
multiply(int)// repeat stored strings n times;
divide(n)   // leaves first k chars of stored string, where k = Math.floor(str.length / n);
remove(str) // remove taken string str from stored; Prohibited to use String.prototype.replace(); 
sub(from, n)// leaves substring starting from and with length n;
get() // returns stored value;

let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')// 'Hello all!'
  .minus(4)  // 'Hello '
  .multiply(3)     // 'Hello Hello Hello '
  .divide(4) // 'Hell';
  .remove('l')     // 'He';
  .sub(1,1)  // 'e';
  .get();    // -> 'e';

console.log(strBuilder.sub(1,2));