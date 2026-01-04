import "./globals.css";

export const metadata = {
  title: "Lunarscribe",
  description: "Operations Control Tower",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#05010f] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
