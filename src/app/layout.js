import Sidebar from "@/_components/sidebar";
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="main flex">
          <div className="sidebar w-[18%] h-screen">
            <Sidebar />
          </div>
          <div className="rightContent w-[82%]">{children}</div>
        </div>
      </body>
    </html>
  );
}
