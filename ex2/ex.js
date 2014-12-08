/**
 * Created by jea on 1/12/2014.
 */
"use strict";

var tab = [1, 2, 3, 1000, 5, 8, 130];

tab.maxForEach = function () {
    var result;
    this.forEach(function (item) {
        if(result == undefined) {
            result = item;
        }
        else if (result < item) {
            result = item;
        }
    });
    return result;
};

tab.maxForCorrected = function () {
    var result = this[0];
    for(var i = 1; i < this.length ; i++) {
        if (result < this[i]) {
            result = this[i];
        }
    }
    return result;
};

tab.maxReduce = function () {
    return this.reduce(function (result, item) {
        if(result < item) {
            result = item;
        }
        return result;
    });
};

tab.maxReduceCorrected = function () {
    if(this.length > 0) {
        return this.reduce(function (result, item) {
            return item > result ? item : result;
        });
    }
};