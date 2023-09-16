import { heroes } from '../data/heroes';

export const getHeroByName = (name = '') => {
  if (!name.length) return [];
  name = name.toLocaleLowerCase().trim();

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
