import React from 'react';
import './Trends.css';
import SearchIcon from '@material-ui/icons/Search'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Trends() {
    return (
        <div className="trends">
            <div className="trends__input">
                <SearchIcon className="trends__searchIcon"/>
                <input placeholder="Search" type="text"/>
            </div>
            <div className="trends__trendContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1351436922405617664"}/>
                <div className="trends_myId">
                <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="zeel_8112"
                options={{ height: 400 }}
                />
                </div>
                <TwitterShareButton 
                url={"https://facebook.com/"}
                options={{text: 'Learing React #react', via:"zeel_8112"}}
                />
            </div>
        </div>
    )
}

export default Trends
