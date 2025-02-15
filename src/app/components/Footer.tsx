import React from 'react'
import { Link } from "@nextui-org/react"

export const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 bg-gray-100 bottom-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CHOW</h3>
            <p className="text-gray-600">Lezzetli yemeklerin adresi</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link href="/">Ana Sayfa</Link></li>
              <li><Link href="/menu">Menü</Link></li>
              <li><Link href="/restaurants">Restoranlar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: info@chow.com</li>
              <li>Tel: +90 555 123 4567</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} CHOW. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
