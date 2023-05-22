import React from 'react';
import { Link } from 'react-router-dom';

import style from './card.module.css';

const Card = ({ pokemon }) => {
  const { id, image, name, types } = pokemon;

  const getTypeColor = (type) => {
    switch (type) {
      case 'grass':
        return '#78c850';
      case 'poison':
        return '#a040a0';
      case 'fire':
        return '#f08030';
      case 'water':
        return '#6890f0';
      case 'bug':
        return '#a8b820';
      case 'normal':
        return '#a8a878';
      case 'electric':
        return '#f8d030';
      case 'ground':
        return '#e0c068';
      case 'fairy':
        return '#EE99AC';
      case 'fighting':
        return '#C03028';
      case 'psychic':
        return '#F85888';
      case 'rock':
        return '#B8A038';
      case 'ghost':
        return '#705898';
      case 'ice':
        return '#98D8D8';
      case 'dragon':
        return '#7038F8';
      case 'dark':
        return '#705848';
      case 'steel':
        return '#B8B8D0';
      case 'flying':
        return '#1e98e4';
      default:
        return '#A8A878';
    }
  };

  return (
    <div className={style.card_container}>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.card_image} />
        <p className={style.card_name}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
      </Link>

      <section className={style.card_types}>
        <p>Tipo:</p>
        <ul className={style.card_type}>
          {types.map((type, index) => (
            <li key={index} style={{ backgroundColor: getTypeColor
(type) }}>
<div className={style.oval_background}>
<span className={style.type_text}>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
</div>
</li>
))}
</ul>
</section>
</div>
);
};

export default Card;