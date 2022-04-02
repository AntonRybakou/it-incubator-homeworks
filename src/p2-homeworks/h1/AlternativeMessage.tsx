import React from 'react'
import s from "./AlternativeMessage.module.css";

type MessageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;
}

function AlternativeMessage(props: MessageType) {
    return (
        <div className={s.body}>
            <div className={s.main}>
                <div className={s.avatar}>
                    <img src={`${props.avatar}`} alt='avatar'/>
                    <div className={s.tongue}/>
                </div>
                <div className={s.text_area}>

                    <div className={s.name}>{props.name}</div>
                    <div className={s.message}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default AlternativeMessage
