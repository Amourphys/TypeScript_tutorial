import React, {useState} from "react";

type PropsType = {
    //on?: boolean
}

function OnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }

    return <div>
        <div style={onStyle} onClick={() => {setOn(true)}}>On</div>
        <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
        <div style={indicatorStyle}/>
    </div>
}

export default OnOff