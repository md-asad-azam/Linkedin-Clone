import React, { useEffect, useState } from 'react'
import "./Feed.css"
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ImageIcon from '@mui/icons-material/Image';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { db } from '../fireBase';

export default function Feed() {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data
                }
            )))
        ))
    }, [])

    const sendPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: "asdfghjk",
            description: "this is sfgl;",
            message: input,
            imgUrl: ""
        })
    }

    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <form>
                        <input type="text" onChange={e => setInput(e.target.value)} placeholder="Start a post" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} color="#70B5F9" title="Photo" />
                    <InputOption Icon={SubscriptionsIcon} color="#e7a33e" title="Video" />
                    <InputOption Icon={EventNoteIcon} color="#c0cbcd" title="Event" />
                    <InputOption Icon={CalendarViewDayIcon} color="#7fc15e" title="Write article" />
                </div>
            </div>

            {/* =====================POSTS================= */}

            {posts.map((post) => (
                <Post />
            ))}
            
            <Post
            name="Asad" 
            message="hello" 
            description="test"
            imgUrl="https://www.industrialempathy.com/img/remote/ZiClJf-1280w.avif"/>
        </div>
    )
}
