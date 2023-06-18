import './globals.css'
import headerStyles from '../styles/Header.module.css'
import { Inter, Manrope } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Zane\'s Website',
  description: 'Created by Zane Harrison',
}

export function Header() {
  return (
    <div className={headerStyles["flex-container"]}>
      <div className={headerStyles["flex-child"]}>
        <Link href='/'><h2>Home</h2></Link>  
      </div>
      <div className={headerStyles["flex-child"]}>
        <Link href='/about'><h2>About</h2></Link>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <div>
      <p>foot</p>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
