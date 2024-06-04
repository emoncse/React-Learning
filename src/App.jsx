import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="custom">
      <div className="p-5 bg-orange-600 rounded flex flex-col">
        <p className="text-center text-lg font-semibold">Login</p>
        <div className="flex flex-col my-3">
          <label>Username</label>
          <input
            className="rounded mt-1 p-2"
            placeholder="Enter your username"
            name="username"
            required
          />
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="rounded mt-1 p-2"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>
        <button className="flex justify-center w-full bg-gray-700 text-white p-1 mt-8 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default App;
