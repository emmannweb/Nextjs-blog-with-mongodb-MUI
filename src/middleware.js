import NextAuth from 'next-auth';

const authConf = {
    providers: [],
    callbacks: {
        authorized({ request, auth }) {
            const protectedPaths = [
                /\/admin/,
            ]
            const { pathname } = request.nextUrl
            if (protectedPaths.some((p) => p.test(pathname))) return !!auth
            return true
        },
    }
}

export const { auth: middleware } = NextAuth(authConf)



// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
