/**
 * Created by jea on 1/12/2014.
 */
"use strict";

var obj = {
    mess : "with",
    f1 : function () { console.log("without"); },
    f2 : function () { console.log(this.mess); }
};

setTimeout(function () { obj.f1(); }, 2000);
setTimeout(function () { obj.f2(); }, 1000);
