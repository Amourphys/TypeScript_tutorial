import React, {useState} from 'react';
import './App.css';
import ControlledAccordion from "./components/Accordion/ControlledAccordion";
import {ControlledRating, RatingValueType} from "./components/Rating/ControlledRating";
import {User} from "./06-callback/06_callback";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import ControlledOnOff from "./components/OnOff/ControlledOnOff";

function App() {
    console.log('rendered App')
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState<boolean>(false)  //используем хук useState чтобы управлять состоянием кнопок
  return (
    <div className="App">
        <User/>
        <PageTitle title={'This is APP component'}/>
        Article 1
        <ControlledRating value={ratingValue} onClick={setRatingValue}/>
        <UncontrolledRating />

        Article 2
        {/*<ControlledAccordion titleValue={'Menu'} collapsed={true}/>*/}
        <ControlledAccordion titleValue={'Navigation'} collapsed={accordionCollapsed} onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
        <UncontrolledAccordion titleValue={'Wishes'}/>

        Article 3
        <ControlledOnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>
        <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
        {/*<UncontrolledOnOff />*/}
    </div>
  );
}

function PageTitle(props: any) {
    console.log('rendered PageTitle')
    return (
        <h1>
            {props.title}
        </h1>
    )
}



export default App;
