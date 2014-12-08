/**
 * Created by jea on 1/12/2014.
 */
"use strict";


function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var p1 = new Person("Julie", "André");

Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
};

var p2 = new Person("Julian", "Gobert");

console.log(p1.fullName());
console.log(p2.fullName());
