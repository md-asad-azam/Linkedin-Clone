import React, { useEffect, useState } from 'react'
import "./Feed.css"
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ImageIcon from '@mui/icons-material/Image';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { db } from "../firebase"
import { onSnapshot, collection, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

export default function Feed() {
    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, "posts")
        const q = query(collectionRef, orderBy("timestamp", "desc"))

        const unSub = onSnapshot(q, (snapshot) => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            })))
        })
        return unSub
    }, [])

    const sendPost = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "posts"), {
            name: "Alan",
            message: input,
            description: "Turing",
            imgUrl: "1912",
            timestamp: serverTimestamp()
        });

        setInput("")
    }



    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <form>
                        <input value={input} type="text" onChange={e => setInput(e.target.value)} placeholder="Start a post" />
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

            {posts.map(({ id, data: { name, message, description, imgUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    message={message}
                    description={description}
                    imgUrl={imgUrl}
                />
            ))}
        </div>
    )
}
