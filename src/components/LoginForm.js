import React, { useState } from "react";
import logo from "../om.png";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the username and password
    if (username === "" || password === "") {
      setError("Please enter a username and password");
      return;
    }

    // Do something with the username and password, such as logging the user in
  };

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-20 w-auto invert "
        src={logo}
        alt="Your Company"
      />

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <div className="flex items-center justify-between">
            <label className="grid text-sm font-medium text-white-900">
              Username
            </label>
          </div>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              type="text"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-white-900"
            >
              Password
            </label>
          </div>
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          type="submit"
        >
          Login
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
