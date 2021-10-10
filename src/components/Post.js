import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function Post({ name, description, message, imgUrl }) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{ name }</h2>
                    <p>{ description }</p>
                </div>
            </div>

            <div className="post_body">
                <p>{ message }</p>
            </div>

            <div className="post_buttons">
                <InputOption Icon={ThumbUpAltIcon} title="Like" color="grey" />
                <InputOption Icon={CommentOutlinedIcon} title="Comment" color="grey" />
                <InputOption Icon={ShareOutlinedIcon} title="Share" color="grey" />
                <InputOption Icon={SendOutlinedIcon} title="Send" color="grey" />
            </div>
        </div>
    )
}
