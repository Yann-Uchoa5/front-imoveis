import SearchBar from "../../components/SearchBar/SearchBar";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import "./Home.css";
import casa1 from "../../assets/images/casa1.jpg";
import casa2 from "../../assets/images/casa2.jpg";
import apto1 from "../../assets/images/apto1.jpg";
import casa3 from "../../assets/images/casa3.jpg";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Mural from "../../components/Mural/Mural";

const Home = () => {
  const properties = [
    {
      image: casa1,
      title: "Casa em Salvador",
      price: "140.000,00",
      location: "Salvador - BA",
    },
    {
      image: apto1,
      title: "Apt em Quixadá",
      price: "500,00",
      location: "Quixadá - CE",
    },
    {
      image: casa2,
      title: "Casa em Boa Viagem",
      price: "140.000,00",
      location: "Boa Viagem - CE",
    },
    {
      image: casa3,
      title: "Casa em Henrique Jorge",
      price: "350.000,00",
      location: "Madalena - CE",
    },
  ];

  return (
    <div>
      <MainNavbar />
      <div className="hero">
        <SearchBar />
      </div>
      <h2>Imóveis que baixaram em até 36% de preço perto de você</h2>
      <div className="property-list">
        {properties.map((p, index) => (
          <PropertyCard key={index} {...p} />
        ))}
      </div>
      <Mural />
    </div>
  );
};

export default Home;
