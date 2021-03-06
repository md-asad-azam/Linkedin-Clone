import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useDispatch } from 'react-redux';
import { signOut } from '@firebase/auth';
import { logout } from '../features/counter/userSlice';
import { auth } from '../firebase';

function Header() {

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        console.log("o");
        dispatch(logout())
        signOut(auth)
    }

    return (
        <div className="header">
            
            <div className="header_left">
                <img src="/images/linkedin.png" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" name="" id="" />
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption onClick={logoutOfApp} avatar={true} title="me" />

            </div>
        </div>
    )
}

export default Header;
