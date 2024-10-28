import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectMongoDb from "@/lib/mongodb";
import users from "@/models/users";

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDb();
    await users.create({ name, email, password: hashedPassword });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Error while creating user" },
      { status: 500 }
    );
  }
}
