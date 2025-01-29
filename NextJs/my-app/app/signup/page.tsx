"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Sign Up</h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={() => {
          axios.post("http://localhost:3000/api/v1/signup", {
            email: email,
            password: password,
          });
        }}
      >
        Sign Up
      </button>
      <p>Already have an account?</p>
      <Link href="/signin">Sign In</Link>
    </div>
  );
}
