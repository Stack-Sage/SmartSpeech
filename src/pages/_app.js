import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/global.css";
import { ReactLenis, useLenis } from 'lenis/react'

function MyApp({ Component, pageProps }) {
   const lenis = useLenis((lenis) => {
    console.log(lenis)
  })
  return (
    <ThemeProvider attribute="class">
      <ReactLenis root />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;




function App() {
 

  return (
    <>
      <ReactLenis root />
      { /* content */ }
    </>
  )
}
