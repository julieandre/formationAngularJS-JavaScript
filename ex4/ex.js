/**
 * Created by jea on 1/12/2014.
 */
"use strict";

function sum() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
