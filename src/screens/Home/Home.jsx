import * as React from 'react';
import { Text, View } from 'react-native';

export const Home = () => {
  const [pokemones, setPokemones] = React.useState([]);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=70')
      .then(response => response.json())
      .then(responseJson => {
        setPokemones(responseJson.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <View>
      <Text>Pokemones</Text>
      {pokemones.map(pokemon => (
        <Text key={pokemon.name}>{pokemon.name}</Text>
      ))}
    </View>
  );
};
