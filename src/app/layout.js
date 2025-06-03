import Sidebar from "@/_components/Sidebar";
import "./globals.css";
import Header from "@/_components/Header";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <div className="main flex">
          <div className="sidebar w-[18%] h-screen">
            <Sidebar />
          </div>
          <div className="rightContent w-[82%]">
            <Header />
            <div className="p-3">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
