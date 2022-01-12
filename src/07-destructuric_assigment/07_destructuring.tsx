import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{title: string, name?: string}> // чтоб не создавать отдельный тип
    address: {
        street: {
            title: string
        }
    }
}
type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimychState(m: string) {
    return [m, function(){}]
}

export const ManComponent: React.FC<PropsType> = (props) => {
    const {title, man, ...restProps} = props  // rest оператор для остаточного деструктурирующего присваивания
    //const {name} = props.man
    const [message, setMessage] = useDimychState('hello')
    return  <div>
                <h1>{title}</h1>
                <hr/>
                <div>{props.car.model}</div>
                <div>{man.name}</div>
            </div>
}