export const searchPokemon = async (pokemon) => {
    try {
        // var url = "";

        // if (pokemon === 0) {
        //     url = "https://pokeapi.co/api/v2/pokemon?limit=1000"
        // } else {
        //     url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        // }
        
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()
    }
    catch (error) {
        console.log('error', error);
    }
}