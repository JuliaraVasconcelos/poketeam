import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
    const [search, setSearch] = useState('ditto')
    const [pokemon, setPokemon] = useState()
    const [random, setRandom] = useState('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.')

    //gera número aleatório entre a quantidade de pokemon existentes
    const onRandomPoke = () =>{
        let min = Math.ceil(1);
        let max = Math.floor(905);
        let rand = Math.floor(Math.random() * (max - min) + 1);
        return rand
    }
    //chama o pokemon na api baseado no número que saiu na função anterior
    const onClickButton = () => {
        setRandom(onRandomPoke)
        onSearchHandler(random)
        console.log('pokemon:', random);
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    
    //adiciona o pokemon sorteado à equipe
    const addToTeam = () => {

    }

    //nega o pokemon sorteado
    const dontAdd = () => {

    }
    //busca o pokemon baseado no número/nome digitado
    // const onChangeHandler = (e) => {
    //     console.log('pokemon:', e.target.value)
    //     setSearch(e.target.value)
    // }

    // const onButtonClickHandler = () => {
    //     onSearchHandler(search)
    //     console.log('pokemon:', search);
    // }
    
    return (
        <div className="searchbar-container">
            <div className="searchbar-btn">
                <button onClick={onClickButton}>Sortear Pokémon</button>
            </div>
            {pokemon ? (
                <div>
                    <img src={pokemon.sprites.front_default} alt="{pokemon.name}"/>
                    <div>Número: {pokemon.id}</div>
                    <div>Nome: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>
                </div>
            ): null}
            <div>Adicionar Pokemon à equipe?</div>
            <div className="searchbar-btn">
                <button onClick={addToTeam}>Sim</button> <button onClick={dontAdd}>Não</button>
            </div>
        </div>
    )
}

export default Searchbar;