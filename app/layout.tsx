import "./globals.css";
import ReactQuery from "./Util/ReactQuery";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQuery>
            {children}
        </ReactQuery>
      </body>
    </html>
  );
}
