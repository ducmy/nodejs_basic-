var storage = require("node-persist");

storage.initSync({
    dir: "students",
});

// List of all student
function getAllStudents() {
    var students = storage.getItemSync("students");

    if (typeof students === "undefined") {
        return [];
    }

    return students;
}

// Add one student to list
function addStudent(id, fullName) {
    var students = getAllStudents();
    students.push({
        id: id,
        fullname: fullName,
    });

    storage.setItemSync("students", students);
}

// Update student
function updateStudent(studentID, studentName) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentID) {
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync("students", students);
}

function removeStudent(studentID) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentID) {
            students.splice(i, 1);
        }
    }

    storage.setItemSync("students", students);
}

function getStudentDetail(studentID) {}

// show all list student by console.log
function showAllStudent() {
    var students = getAllStudents();
    students.forEach(function(student) {
        console.log("Student: " + student.fullname + " (" + student.id + ")");
    });
}

function clearAllStudent() {
    storage.removeItem("students");
}

addStudent(1, "Cuong");
addStudent(2, "Kinh");
addStudent(3, "Chinh");
addStudent(4, "Quyen");
showAllStudent();
updateStudent(4, "Quyen Update");
removeStudent(2);

// clearAllStudent();

showAllStudent();