function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if(this.marks === undefined) {
        var arr1 = [...marksToAdd];
            this.marks = [arr1];
        }
}

Student.prototype.getAverage = function () {
    if(this.marks === undefined || this.marks.length != 0) {
        return Student.marks.reduce((acc, item, index, array) => {return acc += item/array.length}, 0);
    }
    else return 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
