import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Contact />
        <Catalog activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
