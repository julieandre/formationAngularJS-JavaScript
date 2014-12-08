/**
 * Created by jea on 1/12/2014.
 */
"use strict";

var person = {
    firstName : "Julie",
    lastName : "André",
    fullName : function () {
        return this.firstName + " " + this.lastName;
    }
};

function fullName2() {
    return this.firstName + " " + this.lastName;
}

var person2 = {
    firstName : "Julie",
    lastName : "André",
    fullName : fullName2
};
