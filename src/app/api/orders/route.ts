import { NextResponse } from "next/server";
import { ordersDb } from "@/app/lib/orders";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { headers } from "next/headers";

// Kullanıcının siparişlerini getir
export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("Session:", session); // Debug için

    if (!session?.user) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const orders = await ordersDb.getUserOrders(session.user.id);
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Siparişler getirilirken hata:", error);
    return NextResponse.json(
      { error: "Siparişler getirilirken bir hata oluştu" },
      { status: 500 }
    );
  }
}

// Yeni sipariş oluştur
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    console.log("Session POST:", session); // Debug için

    if (!session?.user) {
      return NextResponse.json(
        { error: "Oturum açmanız gerekiyor" },
        { status: 401 }
      );
    }

    const data = await request.json();
    console.log("Order data:", data); // Debug için

    const order = await ordersDb.create({
      userId: session.user.id,
      items: data.items,
      totalAmount: data.totalAmount,
      status: 'beklemede',
      address: data.address,
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Sipariş oluşturulurken hata:", error);
    return NextResponse.json(
      { error: "Sipariş oluşturulurken bir hata oluştu" },
      { status: 500 }
    );
  }
}
