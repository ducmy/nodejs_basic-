/* Learn basic Node JS */
// 01. Parse String to JSON

var student_string = '{"name": "Nguyen Duc My","age": 30}';

var student_obj = JSON.parse(student_string);

console.log(`Name: ${student_obj.name}`);

console.log(`Age: ${student_obj.age}`);

// 02. Convert JSON to String

var student_string = '{"name": "Nguyen Duc My","age": 26}';

var student_obj = JSON.parse(student_string);

console.log("--OBJECT--");
console.log(`Name: ${student_obj.name}`);
console.log(`Age: ${student_obj.age}`);

console.log("--STRING--");
console.log(JSON.stringify(student_obj));

// 03. Save JSON to file
var student_obj = {
    name: "Nguyen Duc My",
    age: "30",
};

var student_string = JSON.stringify(student_obj);

// Save file
var storage = require("node-persist");
storage.initSync();
storage.setItemSync("student", student_string);

// READ file

var content = storage.getItem("student");
console.log(`content: ${content}`);