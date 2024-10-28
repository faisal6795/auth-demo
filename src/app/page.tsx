import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>Hello, this is the homepage</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
