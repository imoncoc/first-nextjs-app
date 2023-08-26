"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next App',
}

export default function RootLayout({ children }) {
  console.log("From Root layout")


  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
