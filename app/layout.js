import "./globals.css";

export const metadata = {
  title: "Subhanallah Shop",
  description: "Trusted Online Shopping Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        {children}
      </body>
    </html>
  );
}
