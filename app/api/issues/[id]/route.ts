import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

interface RouteParams {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Issue ID' }, { status: 400 });
    }

    const issue = await prisma.issue.findUnique({
      where: { id },
    });

    if (!issue) {
      return NextResponse.json({ error: 'Issue not found' }, { status: 404 });
    }

    return NextResponse.json(issue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
export async function PUT(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Issue ID' }, { status: 400 });
    }

    const { title, description } = await req.json();

    const updatedIssue = await prisma.issue.update({
      where: { id },
      data: { title, description },
    });

    return NextResponse.json(updatedIssue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: RouteParams }) {
  try {
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid Issue ID' }, { status: 400 });
    }

    const deletedIssue = await prisma.issue.delete({
      where: { id },
    });

    return NextResponse.json(deletedIssue);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}