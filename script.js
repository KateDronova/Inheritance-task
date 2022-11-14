
/////// Common class first
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

/////// ES6 for numbers
class IntBuilder extends Builder {
  constructor(x) {
    super(x);
    this.x = x||0;
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

/////// ES5 for strings
function StringBuilder(x) {
  Builder.call(this, x);
  this.x = x||'';
}
StringBuilder.prototype = Object.create(Builder.prototype);
//can also set through Object.setPrototypeOf(StringBuilder, Builder) ?;

StringBuilder.prototype.sub = function(from, n) {
  this.from = from;
  this.n = n;
  return this.x.substr(this.from, this.n);
}

StringBuilder.prototype.remove = function(str) {
  this.str = str;
  let from = this.x.indexOf(this.str);
  let to = from + str.length;
  if (from == -1) {
    return;
  } else {
    return `${this.x.slice(0, from)}${this.x.slice(to)}`;
  }
}

StringBuilder.prototype.minus = function(y) {
  return this.x.replace(this.x.slice(-y),'');
}

StringBuilder.prototype.multiply = function(y) {
  return this.x.repeat(y);
}

StringBuilder.prototype.divide = function(y) {
  let k = Math.floor(this.x.length /y);
  return this.x.substr(0, k);
}