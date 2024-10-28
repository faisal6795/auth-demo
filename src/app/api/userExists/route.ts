import { NextResponse } from "next/server";
import connectMongoDb from "@/lib/mongodb";
import users from "@/models/users";

export async function POST(request: Request) {
  const { email } = await request.json();
  try {
    await connectMongoDb();
    const user = await users.findOne({ email }).select("_id");
    console.log(user);
    return NextResponse.json({ exists: user !== null });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ exists: false });
  }
}
