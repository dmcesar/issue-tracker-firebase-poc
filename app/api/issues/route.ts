import { db } from "@/app/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createIssueSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required.")
    .max(255, "Title length limit exceeded."),
  description: z.string().min(1, "Description is required."),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createIssueSchema.safeParse(body);

  // Invalid request body
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  // TODO: Store issue in Firestore
  const issuesCollection = collection(db, "issues");
  const persistedIssue = await addDoc(issuesCollection, body);

  return NextResponse.json(persistedIssue, { status: 201 });
}
