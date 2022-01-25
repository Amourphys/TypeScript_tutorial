import React, { ChangeEvent, useRef, useState } from 'react';

const UncontrolledInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);    
    }
    return (
        <div>
            <input onChange={change}/> {value}
            <input ref={inputRef}/>
            <button onClick={save}>save</button> - actual value: {value}
            
        </div>
    );
};

export default UncontrolledInput;