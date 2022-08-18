import Header from './layout/Header'
import Home from './pages/Home'
import Footer from './layout/Footer'

function App() {
  return (
    <div className="App min-vh-100 flex flex-column w-100">
      <header className="dt w-100 border-box pa3 ph4-ns">
        <Header />
      </header>

      <section className='w-100'>
        <Home />
      </section>

      <footer className='border-box flex items-center mt-auto pv1 ph4-ns w-100'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
