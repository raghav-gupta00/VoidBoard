import { useState } from "react";
import { Login } from "./components/Login.jsx";
import { Chat } from "./components/Chat.jsx";

function App() {
  const [username, setUsername] = useState(() => localStorage.getItem("username"));

  const handleLogin = (name) => {
    localStorage.setItem("username", name);
    setUsername(name);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername(null);
  };

  return (
    <>
      {username ? (
        <Chat username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
