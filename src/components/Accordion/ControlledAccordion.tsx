import React from 'react';

type AccordionPropsType = {                               //прописываем типизацию для контролируемого аккордиона
    titleValue: string,
    collapsed: boolean
    onClick: () => void
}
//укороченная запись компоненты контролируемый аккордион с условием передаваемым в свойстве collapsed
function ControlledAccordion(props: AccordionPropsType) {//прописываем типизацию в пропсы
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
        {!props.collapsed  && <AccordionBody/>}
    </div>
}                                                      //колбэк приходит из пропсов из главной компоненты

/*function Accordion2(props: AccordionPropsType) {         //более длинная запись с условием
    console.log('rendered Accordion')
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody />
            </div>
        )
    } else if (!props.collapsed) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody />
            </div>
        )
    }

}*/

type AccordionTitlePropsType = {                            //типизация для составляющих компонент аккордиона
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) { //компонента с названием аккордиона
    console.log('rendered AccordionTitle')
    return (
        <div>
            <h3 onClick={props.onClick}>{props.title}</h3>
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

export default ControlledAccordion;