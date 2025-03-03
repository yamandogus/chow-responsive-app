import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#068C52] to-[#025B35] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <Link href="/" className="font-bold text-2xl inline-block">
              Crow<span className="text-[#00F076]">/</span>
              <span className="text-white">/</span>
            </Link>
            <p className="text-gray-200 max-w-md">
              En lezzetli yemeklerin adresi. Türkiye&apos;nin dört bir yanından seçkin restoranlar ve eşsiz lezzetler.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="hover:text-[#00F076] transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#00F076] transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#00F076] transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-[#00F076] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-sm"></i>
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#00F076] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-sm"></i>
                  Menü
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="hover:text-[#00F076] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-sm"></i>
                  Restoranlar
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00F076] transition-colors flex items-center gap-2">
                  <i className="fas fa-chevron-right text-sm"></i>
                  Hakkımızda
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <i className="fas fa-phone text-[#00F076]"></i>
                <span>+90 (532) .......</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-envelope text-[#00F076]"></i>
                <span>info@chow.com</span>
              </p>
              <p className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-[#00F076]"></i>
                <span>İstanbul, Türkiye</span>
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3 text-gray-200">
                  <i className="fas fa-utensils text-[#00F076]"></i>
                  <div>
                    <p className="font-semibold">Çalışma Saatleri</p>
                    <p className="text-sm">Her gün: 09:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Crow. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
