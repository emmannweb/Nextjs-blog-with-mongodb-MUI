import dbConnect from "@/lib/dbConnect";
import User from "@/lib/models/User";
import { NextResponse } from "next/server";


export const GET = async (req) => {

    await dbConnect();

    try {
        const users = await User.find({});
        return NextResponse.json({ users });
    } catch (error) {
        return NextResponse.json({ message: "no user found!" })
    }
}


export const POST = async (...request) => {
    const [req, { params }] = request;
    const { username, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10)

    await dbConnect();

    try {
        const user = new User({ username, email, password: hashedPassword });
        const res = await user.save();
        return NextResponse.json({ success: true, res });
    } catch (error) {
        return Response.json({
            message: error.message,
            status: 500
        })
    }
}