import Like from "../../../../models/Likes";
import { NextResponse } from "next/server";
import dbConnect from "../../../../lib/mongodb";
import crypto from "crypto";

export async function POST(req) {
  await dbConnect();
  console.log("my request ip is >>>>>", req);
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";
  const body = await req.json();
  const { postId } = body;

  const ipHash = crypto.createHash("sha256").update(ip).digest("hex");

  const existingLike = await Like.findOne({ postId, ipHash });

  if (existingLike) {
    const totalLikes = await Like.countDocuments({ postId });
    return NextResponse.json({
      success: false,
      message: "Already liked",
      totalLikes,
      ip
    });
  }

  await Like.create({ postId, ipHash });

  const totalLikes = await Like.countDocuments({ postId });

  return NextResponse.json({ success: true, totalLikes , ip });
}

// export async function GET(req){
//     await dbConnect();
//     const response = await Like
// }
