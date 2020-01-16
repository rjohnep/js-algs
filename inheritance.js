// PROTOTYPE INHERITANCE/DELEGATION
function A() {
  this.a = 1;
}
function B() {
  A.call(this);
  this.b = 2;
}

B.prototype = Object.create(A.prototype);

var c = new B();

c.a // -> 1
c.b // -> 2
