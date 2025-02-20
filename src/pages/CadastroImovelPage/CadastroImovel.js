import MainNavbar from "../../components/MainNavbar/MainNavbar";
import WomanBanner from "../../components/WomanBanner/WomanBanner";
import Footer from "../../components/Footer/Footer";

const Cadastro_imovel = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <MainNavbar />
      <div style={{ flex: 1 }}>
        <WomanBanner />
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro_imovel;