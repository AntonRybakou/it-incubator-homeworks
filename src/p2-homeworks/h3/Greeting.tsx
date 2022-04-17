import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: React.ChangeEvent<HTMLInputElement>) => void // need to fix any
    pressEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, pressEnter, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyDown={pressEnter}
                   className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            {error ? <div className={s.errorText}>{error}</div> : null}
        </div>
    )
}

export default Greeting
