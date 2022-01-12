import {createGreetingMessage, ManType} from "./05_map";

let people: Array<ManType> = []

beforeEach(() => {
    people = [
        {name: "Andrew Ivanov", age: 33},
        {name: "Alexander Petrov", age: 24},
        {name: "Dmitry Fyodorov", age: 18}
    ]
})

test('Should get array of greeting messages', () => {
    const messages = createGreetingMessage(people)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Andrew. Welcome')
    expect(messages[1]).toBe('Hello Alexander. Welcome')
    expect(messages[2]).toBe('Hello Dmitry. Welcome')
})