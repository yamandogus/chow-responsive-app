"use client";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const Login = () => {
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false
      });
      
      if (result?.error) {
        setError("E-posta veya şifre hatalı");
      } else {
        toast.success("Başarıyla giriş yapıldı!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Giriş işlemi başarısız oldu");
      }
    }
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Kayıt işlemi başarısız oldu");
      }

      toast.success("Başarıyla kayıt oldunuz!");
      
      const result = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false
      });

      if (!result?.error) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Kayıt işlemi başarısız oldu");
      }
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="max-w-md w-full p-4">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        <Tabs aria-label="Giriş/Kayıt" fullWidth>
          <Tab key="login" title="Giriş">
            <Card>
              <CardBody>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">E-posta</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="rounded-lg border p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Şifre</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Şifreniz"
                      className="rounded-lg border p-2"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded-lg py-2 px-4 bg-green-600 transition-colors hover:bg-green-700"
                  >
                    Giriş Yap
                  </button>
                </form>
              </CardBody>
            </Card>
          </Tab>
          <Tab key="register" title="Kayıt Ol">
            <Card>
              <CardBody>
                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name">Ad Soyad</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Ad ve soyadınız"
                      className="rounded-lg border p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="register-email">E-posta</label>
                    <input
                      id="register-email"
                      name="email"
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="rounded-lg border p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="register-password">Şifre</label>
                    <input
                      id="register-password"
                      name="password"
                      type="password"
                      placeholder="Şifreniz"
                      className="rounded-lg border p-2"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-600 transition-colors"
                  >
                    Kayıt Ol
                  </button>
                </form>
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
