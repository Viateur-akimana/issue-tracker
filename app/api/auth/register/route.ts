import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const hashedPassword = await hash(password,10);
    const newUser = await prisma.user.create({
        data:{
            email,
            password: hashedPassword
        }
    })
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}