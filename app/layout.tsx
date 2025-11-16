export const metadata = {
  title: "Bloxion Docs",
  description: "Documentation and legal pages for Bloxion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#000", color: "#fff", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}