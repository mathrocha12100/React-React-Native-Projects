import React from 'react';
import './styles/HeaderStyle.css';
import icon from '../assets/account_circle - material.png';

function Header() {
  return (
      <header>
        <div className="content">
          <h1>Facebook</h1>
          <ul>
            <li>Meu perfil</li>
            <li><img src={icon}/></li>
          </ul>
        </div>
      </header>
  );
}

export default Header;