import type { NextAuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github'
import Credentials from "next-auth/providers/credentials";


export const options: NextAuthOptions ={
    providers:[
        GitHubProvider({
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string,
        })
    ],

}