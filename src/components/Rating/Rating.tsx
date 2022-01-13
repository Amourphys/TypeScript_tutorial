import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {
    console.log('rendered Rating')
    return (
            <div>
                <Star selected={props.value > 0}/>
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
            </div>
        )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('rendered Star')
    if (props.selected) {
        return  <span> <b>star</b> </span>
    } else {
        return  <span> star </span>
    }

}