import { db } from "@/app/lib/db";

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