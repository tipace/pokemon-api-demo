const case1 = {
  __mock: true,
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ],
};

const case2 = {
  __mock: true,
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
  previous: null,
  results: [
    {
      name({ offset }) {
        return +offset > 0 ? 'bulbasaur1' : 'bulbasaur0';
      },
      url({ offset }) {
        return +offset > 1
          ? 'https://pokeapi.co/api/v2/pokemon/1/'
          : 'https://pokeapi.co/api/v2/pokemon/2/';
      },
    },
  ],
};

const case3 = ({ offset }) => ({
  __mock: true,
  count: 1302,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
  previous: null,
  results: [
    {
      name: +offset > 0 ? 'bulbasaur1' : 'bulbasaur0',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
  ],
});

module.exports = case2;
