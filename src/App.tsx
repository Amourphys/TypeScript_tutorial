import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {User} from "./06-callback/06_callback";
import OnOff from "./components/OnOff/OnOff";

function App() {
    console.log('rendered App')
  return (
    <div className="App">
        <User/>
        <PageTitle title={'This is APP component'}/>
        Article 1
        <Rating value={4}/>
        <Accordion titleValue={'Menu'} collapsed={true}/>
        <Accordion titleValue={'Navigation'} collapsed={false}/>
        Article 2
        <Rating value={1}/>
        Article 3
        <Rating value={2}/>
        Article 4
        <Rating value={3}/>
        Article 5
        <OnOff />
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
