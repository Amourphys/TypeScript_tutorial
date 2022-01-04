import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
    console.log('rendered App')
  return (
    <div className="App">
        <PageTitle title={'This is APP component'}/>
        Article 1
        <Rating value={3}/>
        <Accordion titleValue={'Menu'} collapsed={true}/>
        <Accordion titleValue={'Navigation'} collapsed={false}/>
        Article 2
        <Rating value={4}/>
        Article 3
        <Rating value={2}/>
        Article 4
        <Rating value={0}/>
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
