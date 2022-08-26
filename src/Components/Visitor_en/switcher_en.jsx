import React from "react";
import { NavLink } from "react-router-dom";

let Switcher_en =()=>{
    return(
       
        <div class="switch-lang"> 
         
          <div class="current-lang"><img class="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_United_Kingdom.png"/>
          <p class="lang-text">EN</p>
            </div>
        
    
        
        <div class="lang-dropdown">
        <NavLink to="/">
        <div class="selecting-lang">
        <img class="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Spain.png"/>
            <p class="lang-text">ES</p>
          </div>
            </NavLink>
          <NavLink to="/fr">
          <div class="selecting-lang"><img class="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_France.png"/>
            <p class="lang-text">FR</p>
          </div>
          </NavLink>
          <NavLink to="/de">
          <div class="selecting-lang"><img class="lang-flag" src="https://cdn2.iconfinder.com/data/icons/world-flag-icons/128/Flag_of_Germany.png"/>
            <p class="lang-text">DE</p>
          </div>
          </NavLink>
          <NavLink to="/cat">
          <div class="selecting-lang">
            <img class="lang-flag" src="https://cdn3.iconfinder.com/data/icons/international-circular-flags/512/catalonia_catalunya_flag_country_national_region_european-512.png"/>
            <p class="lang-text">CAT</p>
          </div>
          </NavLink>
        </div>
      </div>
    );
}
export default Switcher_en