import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (value: FilterType) => void,
    deleteAffairCallback: (_id: number) => void,
}

function AlternativeAffairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    let [filter, setFilter] = useState<FilterType>('all')

    const setAll = () => {
        props.setFilter('all')
        setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
        setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
        setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
        setFilter('low')
    }

    return (
        <div>
            {mappedAffairs}

            <div className={s.buttons}>
                <button className={s.button} onClick={setAll}>All</button>
                <button className={ filter === "high" ? s.high : s.button } onClick={setHigh}>High</button>
                <button className={ filter === "middle" ? s.middle : s.button } onClick={setMiddle}>Middle</button>
                <button className={ filter === "low" ? s.low : s.button } onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default AlternativeAffairs