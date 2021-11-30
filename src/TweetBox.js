import React, { useState } from 'react';
import './TweetBox.css'
import { Avatar, Button} from '@material-ui/core';
import image from './image_1.jpg'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');
    const [tweetUsername, setTweetUsername] = useState('');
    const [tweetDisplayname, setTweetDisplayname] = useState('');


    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: tweetDisplayname,
            username: tweetUsername,
            text: tweetMessage,
            verified: false,
            image: tweetImage,
            // image: 'https://images.unsplash.com/photo-1627433671325-a84381a481d5?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            avatar: 'https://images.unsplash.com/photo-1627986448232-6a0991295d79?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            // avatar: 'https://tse1.mm.bing.net/th?id=OIP.d7HCWHtqxOSfDQHieW764gHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123',

        });
        setTweetMessage("");
        setTweetImage("");
        setTweetUsername("");
        setTweetDisplayname("");

    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={image}/>
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening" type="text" />
                </div>
                <input onChange={e => setTweetDisplayname(e.target.value)} value={tweetDisplayname} className="tweetBox__imageInput" placeholder="Display Name" type="text" />
                <input onChange={e => setTweetUsername(e.target.value)} value={tweetUsername} className="tweetBox__imageInput" placeholder="Username " type="text" />
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} className="tweetBox__imageInput" placeholder="Optional: Enter Image URL" type="text" />
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
