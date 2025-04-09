import Like from "../../../../models/Likes";
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import crypto from "crypto";

export async function POST(req) {
  await dbConnect();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
  const body = await req.json();
  const { postSlug } = body;

  const ipHash = crypto.createHash("sha256").update(ip).digest("hex");

  const existingLike = await Like.findOne({ slug: postSlug, ipHash });

  if (existingLike) {
    const totalLikes = await Like.countDocuments({ slug: postSlug });
    return NextResponse.json({
      success: false,
      message: "Already liked",
      totalLikes,
    });
  }

  await Like.create({ slug: postSlug, ipHash });

  const totalLikes = await Like.countDocuments({ slug: postSlug });

  return NextResponse.json({ success: true, totalLikes });
}

export async function GET(req) {
  await dbConnect();
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  console.log("Slug:", slug);

  const totalLikes = await Like.countDocuments({ slug: slug });
 
  return NextResponse.json({ success: true, totalLikes });
}
