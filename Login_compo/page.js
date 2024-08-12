
"use client"
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button onClick={() => signIn("instagram")}>
      Sign in with Instagram
    </button>
  );
};

export default LoginButton;
