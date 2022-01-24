import React, {useState} from "react";

type PropsType = {                             //прописываем типизацию для пропсов
    on: boolean
    onChange: (on: boolean) => void
}
//создание компоненты UncontrolledOnOff
function UncontrolledOnOff(props: PropsType) {              //передаем типизацию пропсов



    const onStyle = {                           //создание активного состояния кнопки
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {                           //создание неактивного состояния кнопки
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {                      //создание индикаторов связанных с состоянием кнопки
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }
    //при помощи обработчика событий onClick создаем callback, использующий хук useState для смены состояний кнопки
    return <div>
        <div style={onStyle} onClick={() => {props.onChange(true)}}>On</div>
        <div style={offStyle} onClick={() => {props.onChange(false)}}>Off</div>
        <div style={indicatorStyle}/>
    </div>
}

export default UncontrolledOnOff