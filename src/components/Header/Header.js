import React from "react";

const Header = () => {
  return (
    <div>
      <div className="nav-top">
        <p>Téléphone(+216)0000000</p>
        <span>
          <img
            src="//ija-nbadlou.com/wp-content/plugins/gtranslate/flags/16/fr.png"
            height="16"
            width="16"
            alt="fr"
          ></img>{" "}
          Français
        </span>
      </div>
      <div className="nav">
      <div className="wrap">
  

<div className="form">
 <select name="" className="search-term select">
      <option value="1">Tous Les Catégories</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      <option value="4">Four</option>
  </select>
  <select name="" className="search-term select">
      <option value="1">Ville</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
      
  </select>
        <input type="text" className="search-term" placeholder="Produit à chercher"/>
   
        <button type="submit" name="button" className="search-button"><i class="fas fa-search" style={{color:"#ffff"}}></i></button>
        
          </div>  
     

    </div>
     </div>
      </div>
    
  );
};

export default Header;
