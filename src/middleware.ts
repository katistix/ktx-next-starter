export { default } from "next-auth/middleware"

const protectedRoutes = [
    "/"
]

export const config = { matcher: protectedRoutes }