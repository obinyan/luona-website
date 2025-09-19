import { Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./CartContext";
import Navbar from "./components/Navbar"; // make sure this path is correct

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Luona Luxury Shoes",
  description: "Luxury footwear crafted with elegance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* Provide cart context to all pages */}
        <CartProvider>
          {/* Navbar stays visible on all pages */}
          <Navbar />

          {/* Each page (landing, store, etc.) gets rendered here */}
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
