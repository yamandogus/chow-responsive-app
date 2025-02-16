"use client";

import Category from "./components/Category";
import Comments from "./components/Comments";
import HeroSection from "./components/HeroSection";
import MoreDetails from "./components/MoreDetails";

export function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-8">
      <HeroSection />
      <Category />
      <Comments />
      <MoreDetails />
    </div>
  );
}

