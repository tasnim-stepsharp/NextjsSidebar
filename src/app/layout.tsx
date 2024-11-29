import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import { ThemeProvider} from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider>  
          <div className="flex h-screen w-full">
            <Sidebar />
            <div className="flex flex-col w-full h-full p-4">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
