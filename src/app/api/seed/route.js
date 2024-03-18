import data from "@/lib/data";
import dbConnect from "@/lib/dbConnect";
import Post from "@/lib/models/Post";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";


export const GET = async (req) => {

    const { users, posts } = data;
    await dbConnect();
    await User.deleteMany();
    await User.insertMany(users);

    await Post.deleteMany();
    await Post.insertMany(posts);

    return NextResponse.json({
        message: 'seeded successfully',
        users,
        posts
    })
}