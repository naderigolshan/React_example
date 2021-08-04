import React, {useState} from 'react'
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SideDrawer from "./SideDrawer";

function Header() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (value) => {
        setDrawerOpen(value);
    }

    return (
        <AppBar position="fixed" style={{
            backgroundColor: "#2f2f2f",
            boxShadow: "none",
            padding: '10px 0px'
        }}>

            <Toolbar>
                <div className="header_logo">
                    <div className="header_logo_venue">پریسا نادری</div>
                    <div className="header_logo_title">برگزاری دوره آنلاین ریکت</div>
                </div>

                <IconButton aria-label="Menu" color="inherit" onClick = {() => toggleDrawer(true)} >
                    <MenuIcon />
                </IconButton>

                <SideDrawer onOpen = {drawerOpen} onClose ={toggleDrawer} />

            </Toolbar>

        </AppBar>
    )
}

export default Header