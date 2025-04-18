import { useState } from "react";

function Login({ onLogin }) {
  
  const [username, setUsername] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (username.trim()) {
      
      onLogin(username.trim());
    }
  };

  return (
    <>
      <div className="container-fluid row justify-content-center align-items-center vh-100">
        <div className="col"></div>
        <div className="col justify-content-center align-items-center">
          <form className="row justify-content-center align-items-center">
            <div className="description1">
              <h1 className="text-nowrap text-center">VoidBoard.</h1>
              <h5 className="text-center">
                A temporary, anonymous message board. No accounts. No history.
                Messages vanish after a short time.
              </h5>
            </div>

            <h2 className="text-nowrap text-center">
              Make a temporary username to get in.
            </h2>

            <input
              type="text"
              id="username1"
              name="username"
              placeholder="anonboy69"
              className="font-monospace input-bar"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button
              id="getinButt"
              className="font-monospace w-auto"
              onClick={handleClick}
            >
              Get in
            </button>
          </form>
        </div>
        <div className="col"></div>
      </div>
    </>
  );
}

export { Login };
