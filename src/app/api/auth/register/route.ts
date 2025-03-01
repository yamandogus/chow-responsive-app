import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();
    console.log("Kayıt isteği:", { name, email });

    const existingUser = await db.users.findByEmail(email);
    if (existingUser) {
      console.log("Kullanıcı zaten mevcut:", email);
      return NextResponse.json(
        { error: "Bu email adresi zaten kayıtlı" },
        { status: 400 }
      );
    }

    const user = await db.users.create({
      name,
      email,
      password,
    });

    console.log("Yeni kullanıcı oluşturuldu:", user);
    return NextResponse.json(
      { message: "Kullanıcı başarıyla oluşturuldu", user },
      { status: 201 }
    );
  } catch (error) {
    console.error("Kayıt hatası:", error);
    return NextResponse.json(
      { error: "Kayıt işlemi başarısız oldu" },
      { status: 500 }
    );
  }
}