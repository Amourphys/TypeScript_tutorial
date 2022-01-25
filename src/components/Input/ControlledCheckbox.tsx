import React, { ChangeEvent, useState } from 'react';

const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input type='checkbox' checked={parentValue} onChange={change}/>
    );
};

export default ControlledCheckbox;