// STYLING
import { Nunito } from "next/font/google";
import "./globals.css";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "GamerStay",
  description: "Airbnb clone for Gamers",
  icons: {
    other: {
      url: "https://i.imgur.com/XH80XWG.png",
    },
  },
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
