export const metadata = {
  title: "Bloxion Docs",
  description: "Documentation and legal pages for Bloxion",
};

import Component from "../components/Intercom";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}