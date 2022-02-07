import { NextResponse, NextRequest } from 'next/server'
import { getToken } from "next-auth/jwt"
export async function middleware(req, ev) {
    const session = await getToken({ req, secret: process.env.JWT_SECRET })
    return NextResponse.next()
}