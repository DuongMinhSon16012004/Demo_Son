function Student(x,y) {
    this.firstName=x,
    this.lastName=y
}
Student.prototype.getFullName = function(){
    return this.firstName + ' ' + this.lastName
}



// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  
console.log(student.lastName); 
console.log(student.getFullName()); 