import "./globals.css";

export const metadata = {
  title: "Web Development",
  description: "A web development lab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
