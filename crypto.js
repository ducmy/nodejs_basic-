var crypto = require("crypto-js");

var message = crypto.AES.encrypt("Nội dung cần mã hóa", "ma bi mat").toString();

console.log(message);

var byte = crypto.AES.decrypt(message, "ma bi mat");

var message_decode = byte.toString(crypto.enc.Utf8);

console.log(message_decode);