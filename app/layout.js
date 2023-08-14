import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Zane's Website",
  description: "Created by Zane Harrison",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {/* <Header /> */}
        <div className="page-wrap">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
