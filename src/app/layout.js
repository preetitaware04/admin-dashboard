import Sidebar from "@/_components/Sidebar";
import "./globals.css";
import Header from "@/_components/Header";
import ThemeProvider from "@/Context/ThemeContext";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="main flex">
            <div className="sidebar w-[18%] h-screen">
              <Sidebar />
            </div>
            <div className="rightContent w-[82%]">
              <Header />
              <div className="pt-28">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
