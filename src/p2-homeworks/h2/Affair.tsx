import React from 'react'
import s from './Affair.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void,
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div key={props.affair._id} className={s.rowAffair}>
            <div className={s.rowName}>{props.affair.name}</div>
            <div className={s.rowPriority}>
                <div className={props.affair.priority === 'low' ? s.low
                    : props.affair.priority === 'middle' ? s.middle
                        : s.high}>{props.affair.priority}
                </div>
            </div>
            <button className={s.button} onClick={deleteCallback}>Delete</button>
        </div>
    )
}

export default Affair
