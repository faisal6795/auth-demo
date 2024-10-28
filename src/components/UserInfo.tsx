"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";

export const UserInfo = () => {
  const { data } = useSession();

  return (
    <div>
      <h1>Hi</h1>
      <h3>{data?.user?.email}</h3>
      <h3>{data?.user?.name}</h3>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
