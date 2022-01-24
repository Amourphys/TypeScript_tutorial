import React, {ChangeEvent, MouseEvent} from "react";

// Основная структура callback функции
const callback = (): number => {
    alert('hey')
    return 12
}
window.setTimeout(callback, 1000)
//создание колбэка для удаления юзера
const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
    alert(e.currentTarget.name)
}
//создание колбэка для сохранения юзера
const saveUser = () => {
    alert('user saved')
}
//создание колбэка для изменения имени юзера
const onNameChanged = () => {
    console.log('name was changed')
}
//создание колбэка для изменения состояния потери фокуса в поле ввода
const focusLostHandler = () => {
    console.log('focus is lost')
}
//создание колбэка для изменения возраста юзера
const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + e.currentTarget.value)
}
//создание компоненты юзер с используемыми колбэками внутри обработчиков событий
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