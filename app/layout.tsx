// STYLING
import { Nunito } from "next/font/google";
import "./globals.css";

// COMPONENTS
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";

// ACTIONS
import getCurrentUser from "./actions/getCurrentUser";

// PROVIDERS
import ToasterProvider from "./providers/ToasterProvider";

// MODAL
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

export const metadata = {
  title: "cavebnb",
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
