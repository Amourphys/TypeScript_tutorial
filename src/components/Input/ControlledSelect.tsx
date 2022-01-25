import React, { ChangeEvent, useState } from 'react';

const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2');
    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <select value={parentValue} onChange={change}>
            <option>none</option>
            <option>Minsk</option>
            <option>Moscow</option>
            <option>Kyiv</option>
        </select>
    );
};

export default ControlledSelect;