import React from 'react';

import Card from '../card/Card';

import style from './cards.module.css';

const Cards = ({ allPokemons }) => {
    return (
        <div className={style.card_list}>
            { allPokemons?.map((pokemon) => 
                <Card key={pokemon.id} pokemon={pokemon} />
            )}
        </div>
    )
};


export default Cards;
