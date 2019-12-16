// import {
//     x as value,
//     rnd,
//     z,
//     getName,
// } from './test-one.js';

// import Student  from './test-two.js';


// console.log('value', value);
// // console.log('x', x);
// console.log('rnd', rnd);
// console.log('z', z);

// console.log(getName());

// let instance = new Student('Ivan');
// console.log('instance', instance);

import DB from './db.js';
import { studentsListElement } from './variables.js';
import { appendStudent } from './utils.js';

let database = new DB('https://frontend-lectures.firebaseio.com');

console.log('database', database);

let studentList = [];

database.getStudents().then(result => {
    console.log(result);

    let studentsList = Object.values(result);

    console.log('studentList', studentsList);
    studentsList.forEach(student => appendStudent(student, studentsListElement));
})