import React, { useState } from 'react';


function App() {
  const [output, setOutput] = useState('');
  const [pokemonList, setPokemonList] = useState([]);

  // GET - Real Pokémon data
  const getPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await res.json();
    setPokemonList(data.results);
    setOutput(JSON.stringify(data.results, null, 2));
  };

  // POST - Mock add
  const addPokemon = async () => {
    const data = { name: 'Rowlet', type: 'Grass' };

    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await res.json();
    setOutput('POST response:\n' + JSON.stringify(result, null, 2));
  };

  // PUT - Mock update
  const updatePokemon = async () => {
    const data = { name: 'Ivysaur', type: 'Grass/Poison' };

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await res.json();
    setOutput('PUT response:\n' + JSON.stringify(result, null, 2));
  };

  // DELETE - Mock delete
  const deletePokemon = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });

    const result = await res.json();
    setOutput('DELETE response:\n' + JSON.stringify(result, null, 2));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Pokémon API React App</h1>
      <button onClick={getPokemon}>Get Pokémon</button>{' '}
      <button onClick={addPokemon}>Add Pokémon (Mock)</button>{' '}
      <button onClick={updatePokemon}>Update Pokémon (Mock)</button>{' '}
      <button onClick={deletePokemon}>Delete Pokémon (Mock)</button>

      <h2>Output:</h2>
      <pre>{output}</pre>

      {pokemonList.length > 0 && (
        <>
          <h2>Pokémon List</h2>
          <ul>
            {pokemonList.map((pokemon, index) => (
              <li key={index}>{pokemon.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
