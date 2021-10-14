import "./HeaderOption.css"
import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

export default function HeaderOption({ Icon, title, avatar, onClick }) {

    const user = useSelector(selectUser)

    return (
        <div onClick={onClick} className="headerOp">
            {Icon && <Icon className="headerOp_icon" />}
            {avatar && <Avatar className="headerOp_icon" >
                {user?.displayName[0]}
            </ Avatar>}
            <h3 className="headerOp_title">{title}</h3>
        </div>
    )
}
