import "./globals.css";
import ThemeProvider from "@/Context/ThemeContext";

export const metadata = {
  title: "Dashboard",
  description: "Dashboard application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
