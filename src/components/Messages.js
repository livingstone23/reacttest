import React, { Fragment } from 'react';
import MessageList from './MessageList';
import {  NavLink } from 'react-router-dom';

function Messages({ messages, saveRechargeMessages }) {

    return (

        <Fragment>
            <h1 className="text-center">MESSAGES</h1>
            <ul className="list-group mt-5">
                {messages.map(message => (
                    <MessageList 
                        key={message.id}
                        message = {message}  
                        saveRechargeMessages= {saveRechargeMessages}
                        />
                ))}
            </ul>

            <button className="btn btn-info">
                    <NavLink
                        to="/new-message"
                        className="nav-link" 
                     
                        >New Message</NavLink>

            </button>

        </Fragment>
    )
}

export default Messages;