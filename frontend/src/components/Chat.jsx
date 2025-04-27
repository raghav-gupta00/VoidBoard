import { useState, useEffect, use } from "react";

function Chat({ username, onLogout }) {
    const [chats, setChats] = useState([]); //chat board from server
    const [message, setMessage] = useState(""); //input from user

    useEffect(() => {
        fetchChat();
    }, []);

    const fetchChat = async () => {
        try {
            const res = await fetch("http://localhost:8000/api/chat");
            const val = await res.json();

            if (val.success) {
                setChats(val.data);
            }

        } catch (error) {
            console.error("Failed to fetch chat", error)
        }
    }

    const sendMessage = async () => {
        if (message.trim() === "") return;

        const newMessage = { username, message };

        try {
            const res = await fetch("http://localhost:8000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newMessage)
            });

            const data = await res.json();
            if (data.success) {
                await fetchChat();
                setMessage("");
            }
        } catch (error) {
            console.error("Failed to send message", error);
        }
    };



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
                        chats.map((msg, index) => (
                            <div key={index} className="mb-3">
                                <strong>{msg.username}:</strong> {msg.message}
                                <div style={{ fontSize: "0.75rem", color: "white" }}>
                                    {new Date(msg.createdAt).toLocaleTimeString()}
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="input-bar-container d-flex p-3 border-top">
                    <input
                        type="text"
                        className="chat-input-bar me-2 font-monospace d-flex w-100"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                    />

                    <button onClick={sendMessage} disabled={!message.trim()}>
                        Send
                    </button>

                </div>
            </div>
        </div>
    );
}

export { Chat };
