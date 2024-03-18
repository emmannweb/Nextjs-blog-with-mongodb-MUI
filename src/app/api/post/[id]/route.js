import dbConnect from "@/lib/dbConnect";
import Post from "@/lib/models/Post";
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";


export const GET = async (...request) => {
    const [req, { params }] = request;
    await dbConnect();

    try {
        const post = await Post.findById(params.id);
        return NextResponse.json({ post });
    } catch (error) {
        return NextResponse.json({ message: "no post found!" })
    }
}


export const PUT = auth(async (...request) => {
    const [req, { params }] = request;

    if (!req.auth) {
        return Response.json({ message: 'Not authenticated', status: 401 })
    }

    const { title, description, url } = await req.json();
    await dbConnect();

    try {
        const post = await Post.findByIdAndUpdate(params.id, { title, description, url }, { new: true });
        return NextResponse.json({ success: true, post });
    } catch (error) {
        return NextResponse.json({ message: "post was unable to update!" })
    }
}
)


export const DELETE = auth(async (...request) => {
    const [req, { params }] = request;
    if (!req.auth) {
        return Response.json({ message: 'Not authenticated', status: 401 })
    }

    // for admin role
    // if (!req.auth?.user.isAdmin) {
    //     return NextResponse.json({ message: 'not admin', status: 401 })
    // }

    await dbConnect();

    try {
        const post = await Post.findByIdAndDelete(params.id);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ message: "post was unable to delete!" })
    }
}

) 