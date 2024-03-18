import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from './dbConnect';
import User from './models/User';
import bcrypt from 'bcryptjs';
import NextAuth from 'next-auth';


export const conf = {

    providers: [
        CredentialsProvider({
            credentials: {
                email: { type: 'email' },
                password: { type: 'password' },
            },
            async authorize(credentials) {
                await dbConnect()
                if (credentials == null) return null

                const user = await User.findOne({ email: credentials.email })
                // console.log('user', user)

                if (user) {
                    const isMatch = await bcrypt.compare(
                        credentials.password,
                        user.password
                    )
                    if (isMatch) {
                        return user
                        //  console.log('log user', user)
                    }
                }
                return null
            },
        }),
    ],

    pages: {
        signIn: '/login',
        newUser: '/register',
        error: '/login',
    },
    callbacks: {
        async jwt({ user, trigger, session, token }) {
            if (user) {
                token.user = {
                    _id: user._id,
                    email: user.email,
                    name: user.username,
                    isAdmin: false,
                }
            }

            if (trigger === 'update' && session) {
                token.user = {
                    ...token.user,
                    email: session.user.email,
                    name: session.user.username,
                }
            }
            return token
        },
        session: async ({ session, token }) => {
            if (token) {
                session.user = token.user
            }
            return session
        }
    },
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth(conf)