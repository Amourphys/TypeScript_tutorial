import React, {useState} from 'react';

type AccordionPropsType = {                                      //создаем типизацию
    titleValue: string
}

const UncontrolledAccordion = (props: AccordionPropsType) => {   //добавляем типизацию в пропсы
    let [collapsed, setCollapsed] = useState(false);    //используем хук useState для управления состоянием
    //прописываем условие управления состоянием для обработчика onClick при помощи колбэка использующего хук useState для смены состояния
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>
            {/*<button onClick={() => {setCollapsed(!collapsed)}}>TOGGLE</button>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitlePropsType = {                            //типизация для составляющих компонент аккордиона
    title: string
    onClick:() => void
}
function AccordionTitle(props: AccordionTitlePropsType) { //компонента с названием аккордиона
    console.log('rendered AccordionTitle')
    return (
        <div>
            <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
        </div>
    )
}
function AccordionBody() {                               //компонента с телом аккордиона
    console.log('rendered AccordionBody')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;