import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/modals/navigation/Navbar";
import Banner from "@/modals/TopBanner/Banner";
import Footer from "@/modals/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Computer Science Department | SGI",
  description: "the engineering on system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Banner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
