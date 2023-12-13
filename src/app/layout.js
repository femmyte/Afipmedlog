import "./globals.css";
import { AppContextProvider } from "@/state/AppContext";

export const metadata = {
  title: "AFIP MEDLOG",
  description:
    "Be in Charge of Your Medical Records You can be in charge of your medical records and grant access to any doctor of your choice in any part of the world for reference purposes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
