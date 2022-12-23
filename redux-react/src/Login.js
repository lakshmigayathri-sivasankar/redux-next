import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/user";
import { useSelector } from "react-redux";

function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user.value);

  return (
    <div>
      {!user.name && (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={age} onChange={(e) => setAge(e.target.value)} />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      )}

      {!user.name ? (
        <button onClick={() => dispatch(login({ name, age, email }))}>
          Login
        </button>
      ) : (
        <button onClick={() => dispatch(logout())}>Logout</button>
      )}
    </div>
  );
}

export default Login;
