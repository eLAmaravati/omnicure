import { Abhaya_Libre, Outfit} from "next/font/google";
import "./globals.css";

const abhaya_libre = Abhaya_Libre(
  { 
    subsets: ["latin"],
    display: 'swap',
    weight: ["400", "700"],
    variable: '--font-abhaya-libre',
  });

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: '--font-outift',
})
export const metadata = {
  title: "Omnicure",
  description: "Medical landing page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${abhaya_libre.variable}`}>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
