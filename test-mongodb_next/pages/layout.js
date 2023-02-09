export default function RootLayout({ children }) {
    return (
     <>
      <Navbar />
      <main>{children}</main>
      <Footer />

     </>
    );
  }