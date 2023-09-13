import React from 'react';
import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
  return alter_ego === characters ? <></> : <p>{characters}</p>;
};

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card">
          <div className="row g-0">
            <div className="col-4">
              <img src={heroImageUrl} className="card-img" alt={superhero} />
            </div>

            <div className="col-8">
              <div className="d-flex flex-column card-body h-100">
                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                <CharactersByHero alter_ego={alter_ego} characters={characters} />

                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                <Link className="mt-auto align-self-end" to={`/hero/${id}`}>
                  Más...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
