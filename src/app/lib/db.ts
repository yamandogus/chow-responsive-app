import fs from 'fs/promises';
import path from 'path';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

const usersFilePath = path.join(process.cwd(), 'users.json');

export const db = {
  users: {
    async findByEmail(email: string): Promise<User | null> {
      try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        const users: User[] = JSON.parse(data);
        return users.find(user => user.email === email) || null;
      } catch {
        return null;
      }
    },

    async create(user: User): Promise<User> {
      try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        const users: User[] = JSON.parse(data);
        users.push(user);
        await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2));
        return user;
      } catch {
        throw new Error('Failed to create user');
      }
    },

    async count(): Promise<number> {
      try {
        const data = await fs.readFile(usersFilePath, 'utf8');
        const users: User[] = JSON.parse(data);
        return users.length;
      } catch {
        return 0;
      }
    }
  }
};