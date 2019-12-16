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
import { studentsListElement, updateStudentFormElement } from './variables.js';
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

studentsListElement.addEventListener('click', event => {
    let target = event.target;

    if (!target.hasAttribute('data-id')) return;

    event.preventDefault();

    let studentId = target.getAttribute('data-id');

    database.getStudentById(studentId).then(responce => {
        console.log('responce', responce);

        for (let key in responce) {
            if (updateStudentFormElement.elements[key]) {
                updateStudentFormElement.elements[key].value = responce[key];
            }
        }
    });
});

updateStudentFormElement.addEventListener('submit', function(event) {
    event.preventDefault();

    let data = {};
    
    for (let key in this.elements) {
        if (!this.elements[key].hasAttribute || !this.elements[key].hasAttribute('name')) continue;

        console.log(this.elements[key]);
        data[this.elements[key].getAttribute('name')] = this.elements[key].value;

        console.log(data);
    }
    
});