import { db } from "@/app/lib/db";
import NextAuth from "next-auth";
import { authOptions } from "./auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

export const signUpUser = async (email: string, password: string) => {
  try {
    const user = await db.users.findByEmail(email);
    if (user) {
      return null;
    }
    const newUser = {
      id: await db.users.count() + 1,
      email,
      password,
      name: email.split('@')[0]
    };
    await db.users.create(newUser);
    return newUser;
  } catch {
    return null;
  }
};