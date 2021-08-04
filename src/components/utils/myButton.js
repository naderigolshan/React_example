import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';

import ticket_icon from "../../assets/images/icons/ticket.png"

function MyButton(props) {

    return <Button variant="contained" href={props.link} size="small" style={{
            backgroundColor: props.bck,
            color: props.color
        }}>
        <img src={ticket_icon} className="iconImage" alt="icon_button" />
        {props.text}
        </Button>;
}

export default MyButton