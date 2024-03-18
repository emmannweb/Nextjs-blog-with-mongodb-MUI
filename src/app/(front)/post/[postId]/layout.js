import Post from "@/lib/models/Post";

export async function generateMetadata({ params }, parent) {
    const id = params?.postId;

    const post = await Post.findById(id);

    return {
        title: post?.title || "NextJS Blog",
        description: post?.description || "CRUD Nextjs -MongoDB",
    }
}


export default function BlogLayout({ children }) {
    return (
        <html lang="en">
            <body >{children}</body>
        </html>
    );
}