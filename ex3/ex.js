/**
 * Created by jea on 1/12/2014.
 */
"use strict";


function fact(n) {
    if(!fact.cache[n]) {
        fact.cache[n] = n > 0
            ? n * fact(n - 1)
            : 1;
    }
    return fact.cache[n];
}
fact.cache = [];


var fact2 = function _fact(n) {
    if(!_fact.cache[n]) {
        _fact.cache[n] = n > 0
            ? n * _fact(n - 1)
            : 1;
    }
    return _fact.cache[n];
};
fact.cache = [];
