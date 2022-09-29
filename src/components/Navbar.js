import React from "react";
import LogoPokeapi from '../img/pokeapi.png'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div>
                <img
                alt="poke api logo" 
                src={LogoPokeapi} 
                className='navbar-img'             
                />
                </div>
            </nav>
        </div>
    )
}
export default Navbar