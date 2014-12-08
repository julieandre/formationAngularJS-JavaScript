/**
 * Created by jea on 1/12/2014.
 */
"use strict";

function time() {
    //var j = 1;
    //for(var i = 1; i <= 10; i++) {
    //    setTimeout(function() { console.log(j); j++; }, i * 1000);
    //}

    //function f(i) {
    //    setTimeout(function() { console.log(i); }, i * 1000)
    //}
    //for(var i = 1; i <= 10; i++) {
    //    f(i);
    //}


    for(var i = 1; i <= 10; i++) {
        (function (i) {
            setTimeout(function() { console.log(i); }, i * 1000);
        }(i));
    }
}


