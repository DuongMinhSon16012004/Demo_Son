var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 100
    },
    {
        id: 2,
        name: 'Java',
        coin: 200
    },
    {
        id: 3,
        name: 'PHP',
        coin: 300
    },
    {
        id: 4,
        name: 'C++',
        coin: 400
    },
    {
        id: 5,
        name: 'Python',
        coin: 500
    },
];

courses.forEach(function(course, index){
    console.log(`${index} : ${course.name}`);
})

//duyệt hết, tất cả đúng thì trả về đúng => AND
var isFree = courses.every(function(course, index){
    return course.coin === 0;
});
console.log(isFree);

//duyệt từng phần tử, nếu 1 cái đúng thì dừng lại, trả về true => OR
var isFree2 = courses.some(function(course, index){
    return course.coin === 0;
});
console.log(isFree2);

//trả về element đầu tiên thoả mãn
var course = courses.find(function(course, index){
    return course.name === 'JS';
})
console.log(course);

//trả về list element thoả mãn
var listCourse = courses.filter(function(course, index){
    return course.coin > 300;
})
console.log(listCourse);


//dùng để duyệt và sửa mảng, rồi copy sang mảng khác
var newCourses = courses.map(function(course){
    return {
        id: course.id,
        name: `Course: ${course.name}`,
        coin: course.coin,
        unit: '$' 
    }
});
console.log(newCourses);