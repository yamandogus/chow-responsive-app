import * as fs from 'fs';
import * as path from 'path';

export type OrderStatus = 'beklemede' | 'hazırlanıyor' | 'yolda' | 'teslim_edildi';

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: OrderStatus;
  createdAt: string;
  address: string;
}

const ORDERS_FILE = path.join(process.cwd(), 'orders.json');

// Siparişleri yükle
const loadOrders = (): Order[] => {
  try {
    if (!fs.existsSync(ORDERS_FILE)) {
      fs.writeFileSync(ORDERS_FILE, JSON.stringify([], null, 2));
      return [];
    }
    const data = fs.readFileSync(ORDERS_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Sipariş verileri yüklenirken hata:', error);
    return [];
  }
};

// Siparişleri kaydet
const saveOrders = (orders: Order[]): boolean => {
  try {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
    return true;
  } catch (error) {
    console.error('Sipariş verileri kaydedilirken hata:', error);
    return false;
  }
};

// Siparişleri yükle
const orders: Order[] = loadOrders();

export const ordersDb = {
  // Yeni sipariş oluştur
  create: async (data: Omit<Order, "id" | "createdAt">) => {
    try {
      const order: Order = {
        ...data,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
      };
      
      orders.push(order);
      
      if (!saveOrders(orders)) {
        throw new Error('Sipariş kaydedilemedi');
      }
      
      return order;
    } catch (error) {
      console.error('Sipariş oluşturma hatası:', error);
      throw error;
    }
  },

  // Kullanıcının siparişlerini getir
  getUserOrders: async (userId: string) => {
    try {
      return orders.filter(order => order.userId === userId);
    } catch (error) {
      console.error('Sipariş getirme hatası:', error);
      return [];
    }
  },

  // Sipariş durumunu güncelle
  updateStatus: async (orderId: string, status: OrderStatus) => {
    try {
      const orderIndex = orders.findIndex(order => order.id === orderId);
      if (orderIndex === -1) {
        throw new Error('Sipariş bulunamadı');
      }

      orders[orderIndex].status = status;
      
      if (!saveOrders(orders)) {
        throw new Error('Sipariş durumu güncellenemedi');
      }

      return orders[orderIndex];
    } catch (error) {
      console.error('Sipariş güncelleme hatası:', error);
      throw error;
    }
  }
};
