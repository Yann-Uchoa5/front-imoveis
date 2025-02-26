import SearchBar from "../../components/SearchBar/SearchBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./Home.css";
import properties from "../../assets/data/properties";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Mural from "../../components/Mural/Mural";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const topProperties = properties.slice(0, 4);

  //aqui é filtrado apenas as casas que ainda não apareceram na sessão principal
  const remainingProperties = properties.filter(
    (p) => !topProperties.includes(p)
  );

  //aqui é filtrado as casas disponíveis para aluguel
  const rentProperties = remainingProperties
    .filter((p) => p.type === "Locação")
    .slice(0, 4);

  //aqui é filtrado as casas disponíveis para compra
  const buyProperties = remainingProperties
    .filter((p) => p.type === "Compra")
    .slice(0, 4);

  return (
    <div className="home_container">
      <MainNavbar />
      <div className="hero">
        <SearchBar />
      </div>
      <h2>Imóveis que baixaram em até 36% de preço perto de você</h2>
      <div className="property-list">
        {topProperties.map((p, index) => (
          <PropertyCard key={index} {...p} />
        ))}
      </div>
      <Mural />
      <h2>
        Imóveis disponíveis para <b>COMPRA</b>
      </h2>
      <div className="property-list">
        {buyProperties.map((p, index) => (
          <PropertyCard key={index} {...p} />
        ))}
      </div>
      <h2>
        Imóveis disponíveis para <b>ALUGUEL</b>
      </h2>
      <div className="property-list">
        {rentProperties.map((p, index) => (
          <PropertyCard key={index} {...p} />
        ))}
      </div>
      <h2>
        Precisa de <a href="#ajuda">AJUDA?</a>
      </h2>
      <Footer />
    </div>
  );
};

export default Home;
