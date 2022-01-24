import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4;

type RatingPropsType = {                         //типизация пропсов для ControlledRating
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function ControlledRating(props: RatingPropsType) {//создание компоненты ControlledRating с передающимися значениями из пропсов в поле selected
    console.log('rendered ControlledRating')

    return (
            <div>
                <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
                <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
                <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
                <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            </div>
        )
}

type StarPropsType = {                     //типизация для компоненты Star
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {      //создание компоненты Star с условием переданным через props.value
    console.log('rendered Star')
    return <span onClick={() => {props.onClick(props.value)}}>
        { props.selected ? <b>star </b> : 'star '}
    </span>
    /*if (props.selected) {
        return  <span> <b>star</b> </span>
    } else {
        return  <span> star </span>
    }*/
}