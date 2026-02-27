import { NextRequest, NextResponse } from "next/server";
import  prisma  from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const user = await prisma.user.create({
      data: {
        name: "Suraj", // hardcoded
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
  }
}