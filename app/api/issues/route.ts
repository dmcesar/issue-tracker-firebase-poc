import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  // Invalid request body
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  // TODO: Store issue in Firestore

  //return NextResponse.json(newIssue, {status: 201});
}
