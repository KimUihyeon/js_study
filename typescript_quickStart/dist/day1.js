"use strict";
var data;
(function (data) {
    data[data["data1"] = 0] = "data1";
    data[data["data2"] = 1] = "data2";
    data[data["data3"] = 2] = "data3";
})(data || (data = {}));
function Add10(a) {
    return a + 10;
}
var kk = data.data1;
console.log(data);
console.log(kk.toString());
console.log(kk);
console.log(Add10(50));
