import { useState } from "react";
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Footer from "../../components/Footer/Footer";

import "./Perfil.css";

export default function Perfil() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="perfil-wrapper">
        <div className="perfil-container">
          <h2>Seu Perfil</h2>
          <label className="foto-upload">
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
            <div className="foto-preview">
              {image ? <img src={image} alt="Foto do usuário" /> : <span>+</span>}
            </div>
          </label>
          <p className="perfil-nome">Nome Sobrenome</p>
          <p className="perfil-email">example@gmail.com</p>
          <button className="botao-sair">
           <i class="fas fa-sign-out-alt"></i>
          Sair</button>
        </div>
        
      </div>
      
      <Footer />
    </>
  );
}
