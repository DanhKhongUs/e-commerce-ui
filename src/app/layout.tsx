import "./globals.css";
import "@/lib/fontawesome";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body>
        <div className="min-h-screen max-w-[1440px] w-full mx-auto flex flex-col bg-[#e7e7e3]">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
