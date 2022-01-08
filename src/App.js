import React, { useState } from "react";
import './App.css';
import './index.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App()
{
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <section>

      <div>
        <Header></Header>
      </div>

      <main className="content">

        <div className="left-side">
          <Nav
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}></Nav>
        </div>

        <div className="right-side">

          {!contactSelected ? (
            <>
              <About></About>
              <Projects></Projects>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
          <Footer></Footer>
        </div>

      </main>

    </section>
  )

}

export default App;
