// import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App()
{
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
