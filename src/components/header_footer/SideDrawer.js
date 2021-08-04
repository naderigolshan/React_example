import React, {useState} from 'react'
import {Drawer, List, ListItem} from "@material-ui/core";
import {scroller} from "react-scroll";

function SideDrawer(props) {

    const {onClose, onOpen} = props;

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150,

        });
        onClose(false)
    };

    return (
        <Drawer anchor="left" open={onOpen} onClose={() => onClose(false)}>
            <List component="nav">

                <ListItem button onClick={() => scrollToElement("Products")}>
                    محصولات
                </ListItem>

                <ListItem button onClick={() => scrollToElement("ProductInfo")}>
                    اطلاعات
                </ListItem>

                <ListItem button onClick={() => scrollToElement("Highlights")}>
                    ویژه ها
                </ListItem>

                <ListItem button onClick={() => scrollToElement("Pricing")}>
                    قیمت
                </ListItem>

                <ListItem button onClick={() => scrollToElement("Location")}>
                    آدرس
                </ListItem>

            </List>
        </Drawer>
    )
}

export default SideDrawer