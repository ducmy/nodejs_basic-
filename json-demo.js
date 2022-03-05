/* Learn basic Node JS */
// 01. Parse String to JSON

var student_string = '{"name": "Nguyen Duc My","age": 26}';

var student_obj = JSON.parse(student_string);

console.log(`Name: ${student_obj.name}`);

console.log(`Age: ${student_obj.age}`);

// 02. Parse JSON to String