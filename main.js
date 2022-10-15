// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
/*
funtionName; createUser
parameters; 2 strings (firstName,lastName)

return: object{
    firstName: string
    lastName: string
}

putting first name and last name into an object
*/

function createUser(firstName, lastName){
    let user = {
        firstName, //same as firstName: firstName
        lastName: lastName,
    }
    return user;
}
console.log(createUser(`Richard`, `Springer`));

function setAge(user, age){
    user.age = age;
    return user;
}

console.log(setAge(createUser(`Richard`, `Springer`),25));

function incrementAge(user){
    user.age = user.age + 1;
    return user;
}
console.log(incrementAge(setAge(createUser(`Richard`, `Springer`),25)));

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

let car = {
    make: `Ford`,
    model: `Mustang`,
    year: 1969,
    needsMaintenance: true
};
console.log(fixCar(car));

function addGrades(student, newGrade){
    student.grades = student.grades.concat(newGrade);
    // for(let i = 0; i < newGrades.length; i++){
    //     student.grades.push(newGrade[i]);
    // }
    return student;
}

let student = {
    name: 'Anthony DeRosa',
    email: 'anthony.derosa@codeimmersives.com',
    grades: [90]
}
let newGrade = [88, 70, 90, 88, 70, 90, 88, 70, 90];
console.log(addGrades(student, newGrade));

function getDataType(object, key){
    return typeof object[key];
}

function addTodo(list1, list2){
    list1.push(list2)
    return list1;
}

function addSong(playlist, Song){
    playlist.songs.push(Song);
    playlist.duration = playlist.duration + Song.duration;
    return playlist;
}

function updateReportCard(reportCard, grade){
    let total = 0;
    reportCard.grades.push(grade);
    if (reportCard.lowestGrade > grade){
        reportCard.lowestGrade = grade;
    }
    if (reportCard.highestGrade < grade){
        reportCard.highestGrade = grade;
    }
    for(let i = 0; i < reportCard.grades.length; i++){
        total += reportCard.grades[i];
    }
    reportCard.averageGrade = (total/reportCard.grades.length);
    return reportCard;
}
const reportCard = {
    lowestGrade: 70,
    highestGrade: 96,
    averageGrade: 82,
    grades: [70, 95, 80]
};
console.log(updateReportCard(reportCard, 62));
console.log(updateReportCard(reportCard, 100));


// console.log(setAge({firstname: `Richard`, lastName: "Springer"},25))


// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
