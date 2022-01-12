const ages = [18, 20, 22, 1, 100, 90, 14];
const predicate = (age: number) => {
    return age > 90;
}
const oldAges = []; // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 150},
    {title: "React", price: 200}
]
// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 150}
]