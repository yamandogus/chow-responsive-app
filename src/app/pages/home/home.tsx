"use client";

import Category from "./components/Category";
import HeroSection from "./components/HeroSection";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-8">
      <HeroSection />
      <Category />
    </div>
  );
}
