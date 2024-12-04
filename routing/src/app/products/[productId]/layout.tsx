

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>

        <h1>This is produt indicidual page</h1>
      
        {children}

    </>
  );
}
