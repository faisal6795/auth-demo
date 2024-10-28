"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { checkUserExists, registerUser } from "@/app/services/users";

export const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    const isUserExists = await checkUserExists(email);
    if (isUserExists.exists) {
      setError("User already exists");
      return;
    }

    const data = await registerUser({ name, email, password });

    if (data) {
      console.log(data.message);
      if (error) setError("");
      (event.target as HTMLFormElement).reset();
      router.replace("/");
    } else {
      setError("Error while registering user");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: 16,
          margin: "auto",
        }}
      >
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="new-password"
        />
        <button type="submit">Register</button>
        {error && <span>{error}</span>}
        <Link href="/login">
          Already have an account? <u>Login</u>
        </Link>
      </form>
    </div>
  );
};
