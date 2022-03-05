var yargs = require('yargs');

var get_argv = yargs.command('get', 'Get list of student', function(yargs) {
    return yargs.options({
        username: { // cấu hình cho name
            demand: true,
            type: 'string',
            alias: 'us', // làm ngắn gọn cái tên,
            default: 'mynguyen',
            // ...
        },
        email: { // cấu hình cho email
            demand: true,

            // ...
        }
    });
}).help().argv;

console.log(get_argv);