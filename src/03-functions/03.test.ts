import { addSkill, makeStudentActive, doesStudentLiveIn } from './03_functions';
import { StudentType } from '../02-objects/02_objects';

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Jurij',
        age: 32,
        isActive: true,
        address: {
            street: 'Lazurnaya',
            city: {
                title: 'Mykolaiv',
                country: 'Ukraine'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            }
        ]
    }
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JS');
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be an active', () => {
    //expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})

test('Does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Kiyv');
    let result2 = doesStudentLiveIn(student, 'Mykolaiv');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})