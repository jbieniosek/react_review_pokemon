import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';
import PokemonList from './components/PokemonList';
import PokemonForm from './components/PokemonForm';
import axios from 'axios';

const defaultData = [
    //{id:14, name:"kakuna", likes:1, image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"}
]
const starterList = ['bulbasaur', 'charmander', 'squirtle'];

const API = 'https://pokeapi.co/api/v2/pokemon/';

const App = () => {
    const[pokemonList, setPokemonList] = useState(defaultData);

    const addLike = (id) => {
        
        console.log("adding like!")
        const newPokemonList = [...pokemonList];
        console.log(newPokemonList);
        for(let pokemon of newPokemonList) {
            console.log("new id", id)
            console.log(pokemon.id)
            if(pokemon.id === id) {
                pokemon.likes += 1;
            }
        }
        setPokemonList(newPokemonList);
    }

    const populateDefaults = () => {
        addPokemonList(starterList, [...pokemonList]);
    }

    useEffect(populateDefaults, []);


    const addPokemonList = (pokemon, newPokemonList) => {
        console.log(pokemon);
        if(pokemon.length == 0) {
            setPokemonList(newPokemonList);
            return; 
        }
        axios.get(API + pokemon[0])
            .then((response) => {
                const data = response.data;
                newPokemonList = addOnePokemon(newPokemonList, data);
                addPokemonList(pokemon.splice(1), newPokemonList);
            })
    }

    const addPokemon = (newPokemon) => {
        axios.get(API + newPokemon)
            .then((response) => {
                const data = response.data;
                const newPokemonList = addOnePokemon([...pokemonList], data)
                setPokemonList(newPokemonList);

            })
            .catch((error) => {console.log(error); console.log("Not a real Pokemon!")});

        console.log("YOU CALLED THIS FUNCTION!")
    };

    const addOnePokemon = (newPokemonList, data) => {
        const newPokemon = {id:data.id, 
            name:data.name, 
            likes:0, 
            image:data.sprites.front_default};
        //const newPokemonList = [...pokemonList];
        newPokemonList.push(newPokemon);
        return newPokemonList;
        //setPokemonList(newPokemonList);
    }



    return (
        <div className="App">
        <header>
            This is Jasmine's Awesome Pokemon Website
        </header>
        <PokemonList pokemonList={pokemonList} addLike={addLike}/>
        <PokemonForm submitFunction={addPokemon} />
        </div>

    );
}

export default App;
