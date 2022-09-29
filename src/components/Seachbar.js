import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
    const [search, setSearch] = useState('ditto')
    const [pokemon, setPokemon] = useState()
    const [random, setRandom] = useState(0)

    

    //gera número aleatório entre a quantidade de pokemon existentes
    const onRandomPoke = () =>{
        let min = Math.ceil(1);
        let max = Math.floor(905);
        let rand = Math.floor(Math.random() * (max - min) + min);
        return rand
    }

    const onClickButton = () => {
        setRandom(onRandomPoke)
        // onSearchHandler(rand)
        // console.log('pokemon:', rand);
    }

    //busca o pokemon baseado no número/nome digitado
    const onChangeHandler = (e) => {
        console.log('pokemon:', e.target.value)
        setSearch(e.target.value)
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
        console.log('pokemon:', search);
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="buscar pokemon" onChange={onChangeHandler} />
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Sortear novo Pokémon</button>
            </div>
            <div className="searchbar">
                {random}
            </div>
            <div className="searchbar-btn">
                <button onClick={onClickButton}>Poke aleatório</button>
            </div>
            {pokemon ? (
                <div>
                    <div>nome: {pokemon.name}</div>
                    <div>peso: {pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default} alt="{pokemon.name}"/>
                </div>
            ): null}
        </div>
    )
}

export default Searchbar;