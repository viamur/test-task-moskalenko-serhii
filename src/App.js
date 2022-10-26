import Header from './components/Header/Header';
import About from './components/About/About';
import Products from './components/Products/Products';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Products />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export default App;
