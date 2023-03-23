import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
// install an adapter 
// we need an easy way to setup the prisma models and make work with prisma models 
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../prisma/client"


export default NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
})
