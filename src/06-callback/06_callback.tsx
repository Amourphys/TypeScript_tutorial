import React, {ChangeEvent, MouseEvent} from "react";

// Основная структура callback функции
const callback = (): number => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)

const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    alert(e.currentTarget.name)
}

const saveUser = () => {
    alert('user saved')
}

const onNameChanged = () => {
    console.log('name was changed')
}

const focusLostHandler = () => {
    console.log('focus is lost')
}

const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + e.currentTarget.value)
}

export const User = () => {
    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}
    >Dimych</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button name="delete" onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>save</button>
    </div>
}