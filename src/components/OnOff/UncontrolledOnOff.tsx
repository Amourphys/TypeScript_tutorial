import React, {useState} from "react";

type PropsType = {                             //прописываем типизацию для пропсов
    onChange: (on: boolean) => void
}
//создание компоненты UncontrolledOnOff
function UncontrolledOnOff(props: PropsType) {              //передаем типизацию пропсов

    let [on, setOn] = useState(false)  //используем хук useState чтобы управлять состоянием кнопок

    const onStyle = {                           //создание активного состояния кнопки
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {                           //создание неактивного состояния кнопки
        width: '30px',
        height: '30px',
        display: 'inline-block',
        border: '1px solid black',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {                      //создание индикаторов связанных с состоянием кнопки
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    //при помощи обработчика событий onClick создаем callback, использующий хук useState для смены состояний кнопки
    return <div>
        <div style={onStyle} onClick={ onClicked }>On</div>
        <div style={offStyle} onClick={ offClicked }>Off</div>
        <div style={indicatorStyle}/>
    </div>
}

export default UncontrolledOnOff