import React from 'react';
import './Sidebar.css';
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from './SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ListAltIcon from "@material-ui/icons/ListAlt";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from '@material-ui/core';

// import Feed from './Feed';
// import { useHistory } from "react-router-dom";


function Sidebar() {

    // const history = useHistory();

    // const handleRoute = () =>{ 
    //     history.push("/explore");
    //   }

    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar_twitterIcon"/>
            <SidebarOption active Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notification"/>
            <SidebarOption Icon={MailOutlineIcon} text="Message"/>
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks"/>
            <SidebarOption Icon={ListAltIcon} text="List"/>
            <SidebarOption Icon={PermIdentityIcon} text="Profile"/>
            <SidebarOption Icon={MoreHorizIcon} text="More"/>

            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>
            
        </div>
    )
}

export default Sidebar
