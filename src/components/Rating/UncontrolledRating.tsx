import React, {useState} from "react";

type RatingPropsType = {                         //типизация пропсов для UncontrolledRating

}

export function UncontrolledRating(props: RatingPropsType) {//создание компоненты UncontrolledRating
    let [value, setValue] = useState(0);           //используем хук useState для управления состоянием
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>   {/*<button onClick={() => {setValue(1)}}>1</button>*/}
            <Star selected={value > 1} setValue={setValue} value={2}/>   {/*<button onClick={() => {setValue(2)}}>2</button>*/}
            <Star selected={value > 2} setValue={setValue} value={3}/>   {/*<button onClick={() => {setValue(3)}}>3</button>*/}
            <Star selected={value > 3} setValue={setValue} value={4}/>   {/*<button onClick={() => {setValue(4)}}>4</button>*/}
        </div>
    )
}

type StarPropsType = {                     //типизация для компоненты Star
    selected: boolean
    value: number
    setValue: (value: number) => void
}

function Star(props: StarPropsType) {      //создание компоненты Star с условием переданным через props.value
    return <span onClick={() => {props.setValue(props.value)}}>
                { props.selected ? <b>star </b> : 'star '}
            </span>
    /*console.log('rendered Star')
    if (props.selected) {
        return  <span> <b>star</b> </span>
    } else {
        return  <span> star </span>
    }*/
}