import { signIn } from "next-auth/react";

export const registerUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  if (response.ok) return await response.json();

  return null;
};

export const checkUserExists = async (email: string) => {
  const response = await fetch("/api/userExists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  if (response.ok) return await response.json();

  return null;
};

export const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: true,
  });

  return response;
};
