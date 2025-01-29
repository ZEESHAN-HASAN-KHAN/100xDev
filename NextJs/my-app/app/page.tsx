//import Image from "next/image";
"use client";
import Link from "next/link";
// import { useRouter } from "next/router";
export default function Home() {
  // const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/signup">Sign Up</Link>
      <Link href="/signin">Log In</Link>

      {/* <button
        className="btn"
        onClick={() => {
          router.push("/signup");
        }}
      >
        Sign Up
      </button> */}
    </div>
  );
}
