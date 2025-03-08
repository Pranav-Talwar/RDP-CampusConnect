import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"; 

// Singleton pattern for PrismaClient to prevent multiple instances

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Use the correct Prisma instance
    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

    console.log("Request body:", body);

    return NextResponse.json({ message: "User signed up successfully" });
  } catch (e) {
    console.error("Error while signing up:", e);

    return NextResponse.json(
      { message: "Error while signing up" },
      { status: 500 }
    );
  }
}
