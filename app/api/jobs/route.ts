import { NextResponse } from "next/server";
import jobs from "@/public/jobs.json";

export function GET() {
  return NextResponse.json(jobs);
}

