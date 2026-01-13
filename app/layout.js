import "./globals.css";

export const metadata = {
  title: "Computer Parts Demo",
  description: "A simple Next.js 16 demo showing navigation and dynamic routes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
