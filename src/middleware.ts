import { withAuth } from 'next-auth/middleware'
import { Redis } from "@upstash/redis"
import { Ratelimit } from '@upstash/ratelimit'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export const redis = Redis.fromEnv()

const ratelimit = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '10 m')
})

export default withAuth(
    async function middleware(req) {
        const pathname = req.nextUrl.pathname

        if (pathname.startsWith('/api')) {
            const ip = req.ip ?? '127.0.0.1'
            try {
                const { success } = await ratelimit.limit(ip)
                if (!success) return NextResponse.json({ error: 'Too many Request' })
                return NextResponse.next()
            } catch (error) {
                return NextResponse.json({ error: 'Internal Server Error' })
            }
        }

        //Route protection
        const token = await getToken({ req })
        const isAuth = !!token

        const isAuthPage = pathname.startsWith('/login')
        const sensitiveRoutes = ['/dashboard']

        if (isAuthPage && isAuth) return NextResponse.redirect(new URL('/dashboard', req.nextUrl.origin).href)
        if (!isAuth && sensitiveRoutes.some((route) => pathname.startsWith(route))) return NextResponse.redirect(new URL('/login', req.url))
    },
    {
        callbacks: {
            async authorized() {
                return true
            }
        }
    }
)
export const config = {
    matcher: ['/', '/api/:path*', '/login', '/dashboard/:path*']
}