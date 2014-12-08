/**
 * Created by jea on 1/12/2014.
 */
"use strict";

var counter = (function () {
    var value = 0;
    return {
        get : function () { return value; },
        inc : function (i) { value += i || 1; }
    }
}());

console.log("C = " + counter.get());
counter.inc(1);
console.log("C = " + counter.get());

// V2

function countetFactory(init) {
    var value = init;
    return {
        get : function () { return value; },
        inc : function (i) { value += i ? i : 1; }
    }
}

var c1 = countetFactory(10);
var c2 = countetFactory(20);

console.log("C1 = " + c1.get());
c1.inc(1);
console.log("C1 = " + c1.get());
c1.inc(2);
console.log("C1 = " + c1.get());
console.log("C2 = " + c2.get());

// V3 : On ne peut pas mettre value en "private" avec un constructeur !

function CounterConstructor (init) {
    this.value = init;
}
CounterConstructor.prototype.get = function () { return this.value; };
CounterConstructor.prototype.inc = function (i) { this.value += i ? i : 1; };

var c01 = new CounterConstructor(10);
var c02 = new CounterConstructor(20);

console.log("C01 = " + c01.get());
c01.inc(1);
console.log("C01 = " + c01.get());
c01.inc(2);
console.log("C01 = " + c01.get());
console.log("C02 = " + c02.get());