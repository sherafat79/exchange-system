import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
    let verify = req.cookies.get("token");
    let url = req.url

    if (!verify && url.includes('/dashboard')) {
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify && url.includes('/auth')) {
        return NextResponse.redirect("http://localhost:3000/user/dashboard");
    }

    return NextResponse.next()
}