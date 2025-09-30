import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import "../src/App.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}