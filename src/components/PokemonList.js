import React from 'react';
import './PokemonList.css';
import Pokemon from './Pokemon';

const PokemonList = (props) => {
    // Name
    // Image
    // ID
    // likes
    const pokemonList = props.pokemonList;
    const displayList = pokemonList.map((elem) => {
        return(<Pokemon key={elem.id} id={elem.id} image={elem.image} name={elem.name} likes={elem.likes} addLike={props.addLike}/>)
    })

    return (
        <React.Fragment>
            {displayList}
        </React.Fragment>    
    );


};

export default PokemonList;