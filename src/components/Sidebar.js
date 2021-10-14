import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
import "./Sidebar.css";
export default function Sidebar() {

    const user = useSelector(selectUser)

    const recentItems = (topic) => (
        <div className="sidebar_recent">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" />

                <Avatar src={user.photoUrl} className="sidebar_avatar" >{user.displayName[0]}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>

            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar_statnum">2,013</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on your post</p>
                    <p className="sidebar_statnum">2,673</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                {recentItems("react")}
                {recentItems("prog")}
                {recentItems("software")}
                {recentItems("devOps")}
            </div>
        </div>
    )
}
