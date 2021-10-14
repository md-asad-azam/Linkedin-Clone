import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"

export default function HeaderOption({Icon, title, avatar, onClick}) {
    return (
        <div onClick={onClick} className="headerOp">
            {Icon && <Icon className="headerOp_icon" />}
            {avatar && <Avatar className="headerOp_icon" src={avatar} />}
            <h3 className="headerOp_title">{title}</h3>
        </div>
    )
}
