import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import { ReactLenis, useLenis } from "lenis/react";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  const lenis = useLenis((lenis) => {
    console.log(lenis);
  });
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <ReactLenis root />
        <div className="min-h-screen flex flex-col">
          <div className="mb-8">
            <Navbar/>
          </div>
        
          <main className="flex-grow ">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;

function App() {
  return (
    <>
      <ReactLenis root />
      {/* content */}
    </>
  );
}
