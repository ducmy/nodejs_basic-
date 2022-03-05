var storage = require('node-persist');

storage.initSync();

storage.setItem("domain", "value")

var value = storage.getItem('domain');

console.log(value);

storage.removeItemSync("domain");
var value2 = storage.getItem('domain');

storage.clearSync();
console.log(value2)