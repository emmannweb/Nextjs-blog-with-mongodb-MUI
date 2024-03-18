import dbConnect from "@/lib/dbConnect";
import Post from "@/lib/models/Post";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";


export const GET = async (req) => {

    await dbConnect();

    try {
        const posts = await Post.find({});
        return NextResponse.json({ posts });
    } catch (error) {
        return NextResponse.json({ message: "no post found!" })
    }
}


export const POST = auth(async (...request) => {
    const [req, { params }] = request;

    if (!req.auth) {
        return Response.json({ message: 'Not authenticated', status: 401 })
    }

    const { title, description, url } = await req.json();

    await dbConnect();

    try {
        const post = new Post({ title, description, url });
        const res = await post.save();
        return NextResponse.json({ success: true, res });
    } catch (error) {
        return NextResponse.json({ message: "no post created!" })
    }
}

) 