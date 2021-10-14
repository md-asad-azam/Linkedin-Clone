import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import InputOption from './InputOption'
import "./Post.css"
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const Post = forwardRef(({ name, description, message, imgUrl }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={imgUrl}>{name[0]}</ Avatar>
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
})

export default Post;