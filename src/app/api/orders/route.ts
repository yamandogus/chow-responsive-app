import { NextResponse } from "next/server";
import { getOrders, createOrder } from "@/app/lib/orders";

// Kullanıcının siparişlerini getir
export async function GET() {
  try {
    const orders = await getOrders();
    return NextResponse.json(orders);
  } catch {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

// Yeni sipariş oluştur
export async function POST() {
  try {
    const order = await createOrder();
    return NextResponse.json(order);
  } catch {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}
