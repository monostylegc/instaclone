import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import { db } from '../../../firebase'
import * as firestoreFunctions from "firebase/firestore";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  pages:{
    signIn : "/auth/signin"
  },
  adapter: FirebaseAdapter({
    db : db,
    ...firestoreFunctions,
  }),
})