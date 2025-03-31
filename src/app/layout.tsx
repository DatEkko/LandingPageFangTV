import FooterComponent from "@/components/footer/FooterComponent";
import HeaderComponent from "@/components/navbar/HeaderComponent";
import { beVietnamPro } from "./font";
import "./global.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body className="container" >
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
