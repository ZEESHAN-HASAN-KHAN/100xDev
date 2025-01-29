"use client";
import Link from "next/link";

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button onClick={() => {}}>Sign In</button>
      <p>Don't have an account?</p>
      <Link href="/signup">Sign Up</Link>
    </div>
  );
}
