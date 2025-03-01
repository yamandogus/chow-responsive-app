import * as fs from 'fs';
import * as path from 'path';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

// Kullanıcı verilerini JSON dosyasında sakla
const DB_FILE = path.join(process.cwd(), 'users.json');

// Dosyadan kullanıcıları yükle
const loadUsers = (): User[] => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify([], null, 2));
      return [];
    }
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Kullanıcı verileri yüklenirken hata:', error);
    return [];
  }
};

// Kullanıcıları dosyaya kaydet
const saveUsers = (users: User[]): boolean => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(users, null, 2));
    return true;
  } catch (error) {
    console.error('Kullanıcı verileri kaydedilirken hata:', error);
    return false;
  }
};

// Kullanıcıları yükle
let users: User[] = loadUsers();

export const db = {
  users: {
    create: async (data: Omit<User, "id">) => {
      try {
        const existingUser = await db.users.findByEmail(data.email);
        if (existingUser) {
          throw new Error('Bu e-posta adresi zaten kullanımda');
        }

        const user = { ...data, id: Date.now().toString() };
        users.push(user);
        
        if (!saveUsers(users)) {
          throw new Error('Kullanıcı kaydedilemedi');
        }
        
        const { password, ...userWithoutPass } = user;
        return userWithoutPass;
      } catch (error) {
        console.error('Kullanıcı oluşturma hatası:', error);
        throw error;
      }
    },
    findByEmail: async (email: string) => {
      try {
        return users.find((u) => u.email === email) || null;
      } catch (error) {
        console.error('Kullanıcı arama hatası:', error);
        return null;
      }
    },
    getAll: async () => {
      try {
        return users.map(({ password, ...user }) => user);
      } catch (error) {
        console.error('Kullanıcıları getirme hatası:', error);
        return [];
      }
    }
  }
};