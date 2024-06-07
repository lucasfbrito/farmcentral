import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Recipes from "./components/Recipes/Recipes.jsx";
import WhatsappBut from "./components/WhatsappBut.jsx";
import Carrusel from "./components/Carrusel.jsx";
import Items from "./components/Items.jsx";
import Productos from "./components/Productos/Productos.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carrusel />
      <Items />
      <Recipes />
      <Productos />
      <WhatsappBut />
      <Footer />
    </div>
  );
};

export default App;
