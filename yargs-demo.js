// Yargs the same with GET method in PHP
var yargs = require('yargs');

var argv = yargs.argv;

console.log(argv);

// Get all args of yargs

// var argv = yargs.argv._;

// Key:value param
// $node yargs-demo.js --domain test.com --author ducmy

// console.log(argv);

// var get_argv = yargs.command('get', 'Get list of student', function(yargs) {
//     return yargs.options({
//         username: { // cấu hình cho name
//             demand: true
//                 // ...
//         },
//         email: { // cấu hình cho email
//             demand: true
//                 // ...
//         }
//     });
// }).argv;