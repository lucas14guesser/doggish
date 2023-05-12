import { Link } from "react-router-dom";

import './NavBar.css'

import dalmata from '../img/icons/dalmata.png'
import husky from '../img/icons/husky-siberiano.png'
import papillon from '../img/icons/papillon.png'
import pointer from '../img/icons/pointer.png'
import pug from '../img/icons/pug.png'
import puli from '../img/icons/puli.png'
import samoyed from '../img/icons/samoyed.png'
import schnauzer from '../img/icons/schnauzer.png'


function NavBar() {
  return (
    <div>      
      <nav className="navbar">
        <section className="miniaturas">
          <span><img src={dalmata} alt="dalmata" /></span>
          <span><img src={husky} alt="husky-siberiano" /></span>
          <span><img src={pointer} alt="pointer" /></span>
          <span><img src={papillon} alt="papillon" /></span>
          <span><img src={pug} alt="pug" /></span>
          <span><img src={puli} alt="puli" /></span>
          <span><img src={samoyed} alt="samoyed" /></span>
          <span><img src={schnauzer} alt="schnauzer" /></span>
        </section>
        <section className="lista">
          <ul className="nav_lista">
            <li className="nav_item">
              <Link to='/'>Inicio</Link>
            </li>
            <li className="nav_item">
              <Link to='/dogs'>Pets</Link>
            </li>
          </ul>
        </section>
        <section className="minaturas">
          <span><img src={dalmata} alt="dalmata" /></span>
          <span><img src={husky} alt="husky-siberiano" /></span>
          <span><img src={pointer} alt="pointer" /></span>
          <span><img src={papillon} alt="papillon" /></span>
          <span><img src={pug} alt="pug" /></span>
          <span><img src={puli} alt="puli" /></span>
          <span><img src={samoyed} alt="samoyed" /></span>
          <span><img src={schnauzer} alt="schnauzer" /></span>
        </section>
      </nav>
    </div>
  );
}

export default NavBar;