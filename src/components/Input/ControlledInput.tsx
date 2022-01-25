import React, { ChangeEvent, useState } from 'react';

const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input value={parentValue} onChange={change}/>
    );
};

export default ControlledInput;