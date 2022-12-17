import { Card, CardContent, Typography } from "@mui/material";
import './Chat.css';
import React, { forwardRef, useEffect, useState } from 'react';

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username.toLowerCase() === message.username.toLowerCase();
    // const isUser = true;

    
    return (
        <div ref = {ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent className="message__message">
                    <Typography 
                        color = "white"
                        variant = "div"
                        component = "div"
                        className="message__div"
                    >
                        {message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
);  



export default Message;