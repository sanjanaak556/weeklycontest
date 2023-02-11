/** @format */

let students = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  pass=students.filter(student=>student["marks"]>=50)
  pass1=pass.map(name=>name)
  console.log(pass1); 

}
PrintStudentswithMap()

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  pass=students.filter(student=>student["marks"]>=50)
  .forEach(stud=>console.log(`${stud["name"]} is ${stud["marks"]}`));

}
PrintStudentsbyForEach()

function addData() {
  //Write your code here, just console.log
let obj={id:4, name:"susan", age:"20", marks:45}
students.push(obj)
console.log(students);

}
addData()

function removeFailedStudent() {
  //Write your code here, just console.log
}

function concatenateArray() {
  //Write your code here, just console.log
}

PrintStudentsbyForEach();
