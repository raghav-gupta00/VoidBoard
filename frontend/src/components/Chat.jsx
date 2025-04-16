import { useState, useEffect } from "react";

function Chat({ username, onLogout }) {
    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="chat-container d-flex flex-column" style={{ width: "90%", maxWidth: "1800px" }}>

                <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h5 className="m-0">VoidBoard — Logged in as <span className="text-success">{username}</span></h5>
                    <button className="btn btn-outline-light btn-sm" onClick={onLogout}>Logout</button>
                </div>

                <div className="chat-messages-box flex-grow-1 overflow-auto p-3">
                    {
                        //chat loads here
                    }
                </div>

                <div className="input-bar-container d-flex p-3 border-top">
                    <input
                        type="text"
                        className="chat-input-bar me-2 font-monospace d-flex w-100"
                        placeholder="Type your message..."
                    />
                    <button>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export { Chat };
