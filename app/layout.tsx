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
    <html lang="en" className="dark">
      <body className="bg-transparent text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
